

import React from 'react'
import CarouselComponent from './CarauselComponent';
import { initialState } from './Hero';
import { useState } from 'react';
import { ApiUrl } from '../config/ApiUrl';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

interface CategoryComponentProps {
    category: string;
    children?: React.ReactNode; // Allow children
    url: string
}
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 14,
        slidesToSlide: 4, // Moves 4 slides at a time

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 14,
        slidesToSlide: 4, 

    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,

    },

    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1, 

    },
};

function CategoryComponent({ children, category, url }: CategoryComponentProps) {
    const [manga, setManga] = useState(initialState)
    const [isLoading, setisLoading] = useState(true)


    //fetch manga
    useEffect(() => {
        axios.get(`${ApiUrl.baseUrl}?${url}`)
            .then((response) => {
                console.log(response)


                interface MangaResponse {
                    id: string;
                    attributes: {
                        title: {
                            en?: string;
                            "en-US"?: string;
                        };
                    };
                    relationships: {
                        type: string;
                        attributes: {
                            fileName: string;
                        };
                    }[];
                }

                const mangaData = response.data.data.map((manga: MangaResponse) => {
                    const title = manga.attributes.title.en || manga.attributes.title["en-US"];
                    const id = manga.id
                    const cover = manga.relationships.find((rel: { type: string }) => rel.type === 'cover_art');
                    const coverUrl = cover ? `https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}` : 'https://placehold.co/600x400/000000/FFFFFF/png';

                    return { title, coverUrl, id }
                });

                setManga(mangaData)
                setisLoading(false)


            })
    }, [])

    return (
        <>
            {
                !isLoading ?
                    <>
                        <div className="mt-14 relative z-10">
                            <h2 className="text-2xl font-bold">{category}</h2>
                            <div>{children}</div> 
                            <CarouselComponent responsive={responsive}>
                                {
                                    manga.map((data) => {
                                        return (
                                            <Link to={`/manga/${data.title}/${data.id}`} className=" mt-10 mx-4" key={data.id}>
                                                <div>
                                                    <img className=" md:w-22 w-80 md:h-44 m-auto object-center  object-cover rounded-md" src={data.coverUrl} alt="mangaCover" />
                                                </div>
                                                <p className="text-sm  w-full text-center h-14 overflow-hidden font-bold pt-1">{data.title}</p>

                                            </Link>
                                        )
                                    })
                                }
                            </CarouselComponent>

                        </div>
                    </>
                    : 
                    <>
                         <div className="flex gap-6 px-2 mt-20  ">
                                {[...Array(14)].map((_, idx) => (
                                    <div key={idx} className="flex-shrink-0 bg-gray-300 opacity-5 animate-pulse ">
                                        <Skeleton
                                            variant="rectangular"
                                            width={220}
                                            height={220}
                                            // animation="wave"
                                            className="rounded-md shadow"

                                        />
                                    </div>
                                ))}
                            </div>
                    </>
            }
        </>
    )
}

export default CategoryComponent