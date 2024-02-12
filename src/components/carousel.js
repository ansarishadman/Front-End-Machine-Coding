import { useEffect, useState } from "react";

const carouselUrls = [
    { id: 0, img: 'https://www.w3schools.com/tags/img_girl.jpg' },
    { id: 1, img: 'https://media.istockphoto.com/id/1487972668/photo/artificial-neural-network-abstract-technology-background.jpg?s=1024x1024&w=is&k=20&c=e9yl330Z4hyU5xP3mFuPFb9_ikQ2AG256iivjVYKCiA=' },
    { id: 2, img: 'https://media.istockphoto.com/id/1487410724/photo/abstract-technology-background.jpg?s=612x612&w=0&k=20&c=Vg4ZO_fYPltkV9j8L2wj9YvfP7veLdrEYRVdnX5QdS8=' }
];

export default function Carousel() {
    const [carousel, setCarousel] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCarousel(carouselUrls[0].img);
    }, []);

    // important Algos
    const handleNextImageChange = () => {
        const countVal = (count + 1) % carouselUrls.length;
        setCount(countVal);
        setCarousel(carouselUrls[countVal].img);
    };

    const handlePreviousImageChange = () => {
        const countVal = (count - 1 + carouselUrls.length) % carouselUrls.length;
        setCount(countVal);
        setCarousel(carouselUrls[countVal].img);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '400px', height: '400px' }} src={carousel} alt={carousel} />
                {count}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                <button onClick={handlePreviousImageChange}>Previous image</button>
                <button onClick={handleNextImageChange}>Next image</button>
            </div>
        </>
    );
}
