import React, { useState, useEffect } from 'react';
import CarouselComponent from './CarauselComponent';
import { initialState } from './Hero';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { ApiUrl } from '../config/ApiUrl';

interface completedComponentProps {
    completed: string;
    children?: React.ReactNode; // Allow children
    url: string;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 14,
        slidesToSlide: 4,
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

function CompletedComponent({ children, completed, url }: completedComponentProps) {
    const [manga, setManga] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch manga data from backend
    useEffect(() => {
        axios.get(`${ApiUrl.baseUrl}/completed?url=${url}`)
            .then((response) => {
                setManga(response.data); 
                setIsLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching manga:", error);
                setIsLoading(false); 
            });


    }, [url]);

    return (
        <>
            {
                !isLoading ?
                    <>
                        <div className="mt-14 relative z-10">
                            <h2 className="text-2xl font-bold">{completed}</h2>
                            <div>{children}</div>
                            <CarouselComponent responsive={responsive}>
                                {
                                    manga.map((data) => (
                                        <Link to={`/manga/${data.title}/${data.id}`} className="mt-10 mx-4" key={data.id}>
                                            <div>
                                                <img referrerPolicy="no-referrer" className="md:w-22 w-80 md:h-44 m-auto object-center object-cover rounded-md" src={data.coverUrl} alt="mangaCover" />
                                            </div>
                                            <p className="text-sm w-full text-center h-14 overflow-hidden font-bold pt-1">{data.title}</p>
                                        </Link>
                                    ))
                                }
                            </CarouselComponent>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex gap-6 px-2 mt-20">
                            {[...Array(14)].map((_, idx) => (
                                <div key={idx} className="flex-shrink-0 bg-gray-300 opacity-5 animate-pulse">
                                    <Skeleton
                                        variant="rectangular"
                                        width={220}
                                        height={220}
                                        className="rounded-md shadow"
                                    />
                                </div>
                            ))}
                        </div>
                    </>
            }
        </>
    );
}

export default CompletedComponent;
