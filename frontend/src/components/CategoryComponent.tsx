

import React from 'react'
import CarouselComponent from './CarauselComponent';
import { initialState } from './Hero';
import { useState } from 'react';

interface CategoryComponentProps {
    category: string;
    children?: React.ReactNode; // Allow children
}
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function CategoryComponent({ children, category }: CategoryComponentProps) {
    const [featured, setFeatured] = useState(initialState)
    return (
        <>
            <div className="mt-14">
                <h2 className="text-2xl font-bold">{category}</h2>
                <div>{children}</div> {/* Ensures children are rendered */}
                <CarouselComponent responsive={responsive}>
                    {
                        featured.map((data) => {
                            return (
                                <div className=" w-full mt-10" key={data.id}>
                                    <div>
                                        <img className=" w-22 h-44 m-auto object-center  object-cover rounded-md" src={data.img} alt="mangaCover" />
                                    </div>
                                    <p className="text-sm  w-full text-center h-14 overflow-hidden font-bold pt-1">{data.title}</p>

                                </div>
                            )
                        })
                    }
                </CarouselComponent>

            </div>
        </>
    )
}

export default CategoryComponent