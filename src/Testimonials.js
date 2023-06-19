import React, { useState } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            image: '/testimonial1.jpg',
            content:
                'Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. They help from start to finish to create a great product identity for your company.',
            author: 'Shalima Hayden',
            position: 'Product Designer',
        },
        // Add more testimonials here...
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="flex flex-col justify-center items-center mt-52">
            <h1 className="text-center text-5xl font-semibold">What Our Customers Say</h1>
            <div className="flex justify-center items-center mt-8 gap-44"> {/* Modified */}
                <button className="bg-gray-500 text-white px-2 py-1 rounded" onClick={handlePrev}>
                    &lt;
                </button>
                <div className="relative flex flex-col border border-4 border-[#FFEFEB] bg-[#FFEFEB] p-12 justify-center items-center mt-8 w-2/5"> {/* Modified */}
                    <div className="absolute rounded-full p-8 border border-4 border-[#E2E2EA] bg-[#E2E2EA] bottom-64">
                        <img src={currentTestimonial.image} alt="" className="" />
                    </div>
                    <p className="text-center text-[#515151]">
                        {currentTestimonial.content}
                    </p>
                    <div className="flex flex-col justify-center items-center mt-14 gap-y-2">
                        <h2 className="text-3xl font-semibold">{currentTestimonial.author}</h2>
                        <h3 className="text-[#515151]">{currentTestimonial.position}</h3>
                    </div>
                </div>
                <button className="bg-gray-500 text-white px-2 py-1 rounded" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>

    );
};

export default Testimonials;
