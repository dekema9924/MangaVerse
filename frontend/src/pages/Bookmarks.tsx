import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import axios from 'axios';
import useUserCookie from '../hooks/useUserCookie';
import { userUrl } from '../config/ApiUrl';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BookmarkInterface {
    coverUrl: string
    mangaId: string
    title: string
}

function Bookmarks() {
    const token = useUserCookie()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [bookmarks, setBookmarks] = useState<BookmarkInterface[]>([])
    const [currentPage, setCurrentPage] = useState(0)

    const itemsPerPage = 3
    const totalPages = Math.ceil(bookmarks.length / itemsPerPage)

    useEffect(() => {
        axios.get(`${userUrl.baseUrl}/bookmarks`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
        }).then((response) => {
            setBookmarks(response.data.bookmarks)
            setLoading(false)
        })
    }, [])

    const paginatedBookmarks = bookmarks.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1)
        }
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1)
        }
    }

    return (
        <div>
            <h1 className='flex items-center gap-2 my-4'><BookmarkAddedIcon className='text-orange-500' />Bookmarks</h1>

            <div className='flex flex-col w-full gap-4'>
                {
                    !loading ? (
                        <>
                            {paginatedBookmarks.map((data) => (
                                <div
                                    key={data.mangaId}
                                    className='cursor-pointer w-20 h-fit flex items-center gap-4'
                                    onClick={() => navigate(`/manga/${data.mangaId}`)} // Navigate to manga detail
                                >
                                    <img className='w-32 md:w-44 h-32 md:h-44 object-cover' src={data.coverUrl} alt="Cover" />
                                    <div>
                                        <p className='font-bold mt-1'>{data.title}</p>
                                        <button className='bg-red-500 w-full rounded-md text-sm h-7 cursor-pointer'>Remove</button>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation Controls */}
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentPage === 0}
                                    className={`px-4 py-2 bg-white text-black rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Prev
                                </button>

                                <span>Page {currentPage + 1} of {totalPages}</span>

                                <button
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages - 1}
                                    className={`px-4 py-2 bg-orange-500 rounded ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    ) : (
                        "..loading Bookmarks"
                    )
                }
            </div>
        </div>
    )
}

export default Bookmarks
