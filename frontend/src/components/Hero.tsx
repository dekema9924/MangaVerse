import { useEffect, useState } from "react"
import CarouselComponent from "./CarauselComponent"
import "react-multi-carousel/lib/styles.css";
import Featured from "./Featured";
import { responsive } from "./CarauselComponent";
import axios from 'axios'
import { ApiUrl } from "../config/ApiUrl";
import { Link } from "react-router-dom";




export interface mangaInterface {
    coverUrl?: string
    title: string
    id: string
}

export const initialState: mangaInterface[] = []


const Hero = () => {
    const [manga, setManga] = useState<mangaInterface[]>([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(()=>{
        axios.get(`${ApiUrl.baseUrl}?limit=20&order[followedCount]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en`)
        .then((response)=>{
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
                const coverUrl = cover ? `https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}` : '';

                return {title, coverUrl, id}
            });

            setManga(mangaData)
            setisLoading(false)
            

        })
    },[])
    return (
        <>
            <div className="mt-10 z-40 relative ">
                {
                    !isLoading ?
                        <>
                            <CarouselComponent responsive={responsive}>
                                {
                                    manga.map((data) => {
                                        console.log({mangaId: data.id})
                                        return (
                                            <Link to={`/manga/${data.title}/${data.id}`} className=" w-full  " key={data.id}>
                                                <div>
                                                    <img className="md:w-[256px] w-96 h-96 m-auto object-center  md:h-[366px] object-cover rounded-md" src={data.coverUrl} alt="mangaCover" />
                                                </div>
                                                <p className="text-2xl md:text-lg text-center font-bold pt-1">{data.title}</p>

                                            </Link>
                                        )
                                    })
                                }
                            </CarouselComponent>
                        </>
                        : "...Loading"
                }
            </div>
            <Featured/>
        </>
    )
}

export default Hero