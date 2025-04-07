import { useEffect, useState } from "react";
import CarouselComponent from "./CarauselComponent";
import "react-multi-carousel/lib/styles.css";
import Featured from "./Featured";
import { responsive } from "./CarauselComponent";
import axios from 'axios';
import { Link } from "react-router-dom";
// import Latest from "./Latest";
import { Skeleton } from '@mui/material';
import { ApiUrl } from "../config/ApiUrl";
import Latest from "./Latest";

// Manga interface definition
export interface mangaInterface {
    coverUrl?: string;
    title: string;
    id: string;
}

export const initialState: mangaInterface[] = [];

const Hero = () => {
    const [manga, setManga] = useState<mangaInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch manga data from the backend API
        axios.get(`${ApiUrl.baseUrl}`)
            .then((response) => {
                setManga(response.data); 
                setIsLoading(false); 
            })
    }, []);

    return (
        <>
            <div className="mt-10 z-40 relative">
                {
                    !isLoading ? (
                        <>
                            <CarouselComponent responsive={responsive}>
                                {
                                    manga.map((data) => {
                                        return (
                                            <Link to={`/manga/${data.title}/${data.id}`} className="w-full" key={data.id}>
                                                <div>
                                                    <img className="md:w-[256px] w-96 h-96 m-auto object-center md:h-[366px] object-cover rounded-md" src={data.coverUrl} alt="mangaCover" />
                                                </div>
                                                <p className="text-2xl md:text-lg text-center font-bold pt-1">{data.title}</p>
                                            </Link>
                                        );
                                    })
                                }
                            </CarouselComponent>
                        </>
                    ) : (
                        <>
                            <div className="flex gap-6 overflow-x-auto px-2">
                                {[...Array(7)].map((_, idx) => (
                                    <div key={idx} className="flex-shrink-0 bg-gray-300 opacity-5 animate-pulse">
                                        <Skeleton
                                            variant="rectangular"
                                            width={256}
                                            height={366}
                                            className="rounded-md shadow"
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )
                }
            </div>
            <Featured />
            <Latest/>
        </>
    );
}

export default Hero;





