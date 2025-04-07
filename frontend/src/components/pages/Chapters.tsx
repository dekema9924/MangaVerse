import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ApiUrl } from '../../config/ApiUrl';

function Chapters() {
    const { id } = useParams();
    const [chapters, setChapters] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [openVolume, setOpenVolume] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const chaptersPerPage = 10;

    useEffect(() => {
        if (!id) return;

        const fetchAllChapters = async() => {
            try {
                const res = await axios.get(`${ApiUrl.baseUrl}/mangachapters/${id}`);
                setChapters(res.data);
                setLoading(false);
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
                                            <Link to={`/${chap.title}/${id}/${chap.id}`}
                                                key={chap.id}
                                                className='flex justify-between p-2 bg-gray-700 rounded-md my-2'
                                            >
                                                <p>{chap.title}</p>
                                                <p>{chap.formattedDate}</p>
                                            </Link>
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
