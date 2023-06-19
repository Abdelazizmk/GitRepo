import React, { useEffect, useState } from 'react';
import Card from './Card';

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const visibleProducts = [
        products[(currentIndex - 1 + products.length) % products.length],
        products[currentIndex],
        products[(currentIndex + 1) % products.length],
        products[(currentIndex + 2) % products.length]
    ];

    return (
        <div className="flex justify-center items-center gap-44 mt-64">
            <button
                className="carousel-btn prev bg-black text-white py-2 px-4 m-2 cursor-pointer"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <div className="carousel-container w-full max-w-screen-lg relative">
                <div className="carousel flex overflow-hidden">
                    {visibleProducts.map((product, index) => (
                        <div key={index} className="mr-4">
                            <Card product={product} type="brief" />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="carousel-btn next bg-black text-white py-2 px-4 m-2 cursor-pointer"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};

export default NewArrival;
