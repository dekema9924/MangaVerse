

import { useState } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useParams } from 'react-router-dom'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useGetDetails from '../../hooks/useGetDetails';
import Chapters from './Chapters';

function Manga() {
    const { id } = useParams()
    const [readmore, setReadmore] = useState(false)
    const { mangaDetails, loading, coverUrl } = useGetDetails({ id: id || '' });

    return (

        <>
            {
                !loading ?
                    <>
                        <div className="mt-10 relative ">
                            <div className="bg-no-repeat bg-cover relative h-66 bg-black">
                                {/* Background Image with Opacity */}
                                {coverUrl ? (
                                    <img
                                        src={coverUrl}
                                        alt="Cover"
                                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-black opacity-50"></div>
                                )}

                                {/* Content that stays unaffected */}
                                <div className="relative z-10 p-4 flex flex-col sm:flex-row w-full">
                                    <img
                                        className="md:w-66 w-full sm:w-33 object-cover h-66 md:h-96"
                                        src={coverUrl ? coverUrl : "https://placehold.co/600x400/000000/FFFFFF/png"}
                                        alt="mangaCover"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="mt-4 sm:mt-0 sm:ml-4 text-white relative w-full">
                                        <p className="text-xl font-bold md:text-[4em]">{mangaDetails?.attributes?.title['en']}</p>
                                        <p className="my-6">
                                            {mangaDetails?.attributes?.altTitles.find((titleObj: { [key: string]: string }) => titleObj.hasOwnProperty('ko'))?.ko}</p>
                                        <p className="mb-6 sm:mb-28 w-full sm:w-44">
                                            {mangaDetails?.attributes?.altTitles.find((titleObj: { [key: string]: string }) => titleObj.hasOwnProperty('ja-ro'))?.['ja-ro']}
                                        </p>

                                        {/* Add to Library Section */}
                                        <div className="px-4  flex flex-col sm:flex-row w-full">
                                            {/* Buttons Section */}
                                            <div className="mt-2 flex flex-row sm:items-center gap-4 flex-wrap w-full">
                                                <p className="bg-orange-500 px-3 py-1 rounded text-white cursor-pointer hidden md:inline-block">
                                                    Add To Library
                                                </p>
                                                <div className="bg-orange-500 p-3 md:hidden rounded">
                                                    <BookmarkIcon style={{ fontSize: "24px" }} />
                                                </div>
                                                <p className="bg-gray-700 px-4 py-2 font-bold rounded-md flex items-center gap-2 cursor-pointer">
                                                    <AutoStoriesIcon className="hidden md:inline" /> Start
                                                    Reading
                                                </p>
                                            </div>

                                            {/* Tags and Additional Info */}
                                            <div className="mt-6 flex flex-col sm:flex-row md:items-center md:justify-start gap-4 w-full ">
                                                {/* Genres Section */}
                                                <ul className="flex flex-wrap gap-2 p-2 rounded-md w-full md:w-auto">
                                                    {
                                                        mangaDetails?.attributes?.tags?.slice(0, 4).map((tag: any, index: number) => (
                                                            <li className="px-3 py-1 rounded-md bg-gray-600 text-white" key={index}>
                                                                {tag.attributes?.name?.['en']}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>

                                                {/* Publication & Status */}
                                                <div className="flex flex-wrap items-start sm:items-center gap-4">
                                                    <p className="flex items-center gap-2 text-gray-300">
                                                        <span className="bg-blue-500 w-3 h-3 rounded-full block"></span>
                                                        Publication: {mangaDetails?.attributes.year}
                                                    </p>
                                                    <p className={`font-bold ${mangaDetails?.attributes.status != 'completed' ? "text-red-600" : "text-green-500"} `}>{mangaDetails?.attributes.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Section - Full Width on Mobile */}
                                <div className="w-full p-4">
                                    <p
                                        className={`text-sm mt-5 w-full md:w-1/2 leading-6 h-10 max-h-34 overflow-hidden transition-all duration-500 ${!readmore ? "h-10" : "h-24"
                                            }`}
                                    >
                                        {mangaDetails?.attributes.description['en']}
                                    </p>
                                    <button
                                        onClick={() => setReadmore(!readmore)}
                                        className="mt-2 bg-orange-500 rounded-md px-2 text-xs"
                                    >
                                        {readmore ? "readLess" : "Read More"}
                                    </button>
                                </div>
                                {/* //manga Chapters */}
                                <Chapters />
                            </div>

                        </div>
                    </>
                    : "...loading"
            }
        </>
    )
}

export default Manga