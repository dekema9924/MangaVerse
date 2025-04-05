import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Chapters() {
    const { id } = useParams();
    const [chapters, setChapters] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [openVolume, setOpenVolume] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const chaptersPerPage = 10;
    useEffect(() => {
        if (!id) return;
    
        const seenChapters = new Set();
        let allChapters: any[] = [];
    
        const fetchAllChapters = async (offset = 0) => {
            const limit = 100;
            try {
                const res = await axios.get(`https://api.mangadex.org/chapter`, {
                    params: {
                        manga: id,
                        translatedLanguage: ['en'],
                        order: { chapter: 'asc' },
                        limit,
                        offset
                    }
                });
    
                const filtered = res.data.data.filter((chapter: any) => {
                    const key = chapter.attributes.chapter;
                    if (!key || seenChapters.has(key) || !chapter.attributes.title) return false;
                    seenChapters.add(key);
                    return true;
                });
    
                const chaptersData = filtered.map((chapter: any) => {
                    const isoDate = chapter.attributes.publishAt;
                    const date = new Date(isoDate);
                    const mm = String(date.getMonth() + 1).padStart(2, '0');
                    const dd = String(date.getDate()).padStart(2, '0');
                    const yy = String(date.getFullYear()).slice(-2);
                    const formattedDate = `${mm}/${dd}/${yy}`;
    
                    return {
                        id: chapter.id,
                        volume: chapter.attributes.volume || 'N/A',
                        title: chapter.attributes.title,
                        chapterNumber: chapter.attributes.chapter,
                        formattedDate
                    };
                });
    
                allChapters = [...allChapters, ...chaptersData];
    
                const total = res.data.total;
                if (offset + limit < total) {
                    await fetchAllChapters(offset + limit);
                } else {
                    setChapters(allChapters);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Failed to fetch chapters:', err);
            }
        };
    
        fetchAllChapters();
    }, [id]);
    
    const handleToggle = (volume: string) => {
        setOpenVolume(prev => (prev === volume ? null : volume));
    };

    const volumes = Array.from(new Set(chapters.map(chap => chap.volume)));

    // Pagination
    const totalPages = Math.ceil(volumes.length / chaptersPerPage);
    const currentVolumes = volumes.slice((page - 1) * chaptersPerPage, page * chaptersPerPage);

    return (
        <div className='mt-5'>
            <h1 className='w-fit bg-gray-700 rounded-md px-4'>Chapters</h1>
            <div className='flex flex-col gap-4 mt-10'>
                {!loading ? (
                    currentVolumes.map(volume => (
                        <div key={volume}>
                            <div className='flex items-center justify-between'>
                                <h1>Volume {volume}</h1>
                                <ArrowDropDownIcon
                                    className='cursor-pointer'
                                    onClick={() => handleToggle(volume)}
                                />
                            </div>
                            {openVolume === volume && (
                                <div className='transition-all duration-300'>
                                    {chapters
                                        .filter(chap => chap.volume === volume)
                                        .map(chap => (
                                            <div
                                                key={chap.id}
                                                className='flex justify-between p-2 bg-gray-700 rounded-md my-2'
                                            >
                                                <p>{chap.title}</p>
                                                <p>{chap.formattedDate}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className='mt-4 flex justify-center gap-4'>
                        <button
                            className='px-4 py-2 bg-gray-600 text-white rounded'
                            disabled={page === 1}
                            onClick={() => setPage(prev => prev - 1)}
                        >
                            Prev
                        </button>
                        <span className='text-white'>{page} / {totalPages}</span>
                        <button
                            className='px-4 py-2 bg-gray-600 text-white rounded'
                            disabled={page === totalPages}
                            onClick={() => setPage(prev => prev + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Chapters;
