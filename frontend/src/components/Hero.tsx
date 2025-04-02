import { useState } from "react"
import CarouselComponent from "./CarauselComponent"
import "react-multi-carousel/lib/styles.css";
import Featured from "./Featured";
import { responsive } from "./CarauselComponent";





export interface mangaInterface {
    img: string
    title: string
    id: string
}

export const initialState: mangaInterface[] = [
    {
        img: 'https://mangadex.org/covers/d0ddd740-4b91-4c66-bfd0-b36a77f8e730/e2be562e-6f9a-4a1c-ab7e-31d593914232.png.256.jpg',
        title: 'Brairot Girlfriend',
        id: "abc"
    },
    {
        img: 'https://mangadex.org/covers/7878c129-a33d-4bf9-b5d2-ff98cbe85bd6/e64f7500-6e1f-4740-b495-26ccc0e97e01.jpg.512.jpg',
        title: 'Sentai Daishikkaku',
        id: "abcd"
    },
    {
        img: 'https://mangadex.org/covers/d422ddc8-eea3-4b0a-82a4-291bbd8c9285/56dd5e24-d619-453c-8500-495e0fb21a1a.jpg.256.jpg',
        title: 'The Shiunji Famil children',
        id: "abcde"
    },
    {
        img: 'https://mangadex.org/covers/b8fd9d83-40c4-40f9-8525-bfcab3a6c3eb/53f80942-49ff-408b-b1c4-78029875c2a4.jpg.256.jpg',
        title: 'Osananajimi wo Erabenai!',
        id: "abcdef"
    },
    {
        img: 'https://mangadex.org/covers/d0ddd740-4b91-4c66-bfd0-b36a77f8e730/e2be562e-6f9a-4a1c-ab7e-31d593914232.png.256.jpg',
        title: 'Brairot Girlfriend',
        id: "abc"
    },
    {
        img: 'https://mangadex.org/covers/7878c129-a33d-4bf9-b5d2-ff98cbe85bd6/e64f7500-6e1f-4740-b495-26ccc0e97e01.jpg.512.jpg',
        title: 'Sentai Daishikkaku',
        id: "abcd"
    },
    {
        img: 'https://mangadex.org/covers/d422ddc8-eea3-4b0a-82a4-291bbd8c9285/56dd5e24-d619-453c-8500-495e0fb21a1a.jpg.256.jpg',
        title: 'The Shiunji Famil children',
        id: "abcde"
    },
    {
        img: 'https://mangadex.org/covers/b8fd9d83-40c4-40f9-8525-bfcab3a6c3eb/53f80942-49ff-408b-b1c4-78029875c2a4.jpg.256.jpg',
        title: 'Osananajimi wo Erabenai!',
        id: "abcdef"
    },
]

const Hero = () => {
    const [manga, setManga] = useState(initialState)
    const [isLoading, setisLoading] = useState(false)
    return (
        <>
            <div className="mt-10 z-40 relative ">
                {
                    !isLoading ?
                        <>
                            <CarouselComponent responsive={responsive}>
                                {
                                    manga.map((data) => {
                                        return (
                                            <div className=" w-full  " key={data.id}>
                                                <div>
                                                    <img className="md:w-[256px] w-96 h-96 m-auto object-center  md:h-[366px] object-cover rounded-md" src={data.img} alt="mangaCover" />
                                                </div>
                                                <p className="text-2xl md:text-lg text-center font-bold pt-1">{data.title}</p>

                                            </div>
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