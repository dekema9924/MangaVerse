import Carousel, {ResponsiveType} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// Define the responsive breakpoints type
export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
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

interface CarouselComponentProps {
    children: React.ReactNode;
    responsive: ResponsiveType
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ children, responsive }) => {
    return (
        <>
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                transitionDuration={500}
                containerClass="carousel-item"
            >

                {children}
            </Carousel>
        </>
    );
}

export default CarouselComponent;
