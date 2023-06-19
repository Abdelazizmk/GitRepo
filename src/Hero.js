import { useEffect, useState } from "react";

const Hero = () => {

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => {
                setImage1(json.image);
                setImage2(json.image);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }, []);

    return (
        <div className="flex justify-between mt-4">
            <div className="mt-64 ml-64">
                <h1 className="text-6xl font-semibold w-2/3">Sort out Your Spring Look</h1>
                <p className="pt-8 text-gray-400 text-xl">
                    We will help to develop every smallest thing into a<br />
                    big one for your company.
                </p>
                <button className="flex items-center mt-8 p-4 pr-8 pl-6 rounded-lg border border-[#F86338] bg-[#F86338] text-white font-semibold text-xl">
                    Shop<span className="mx-1">&gt;</span>
                </button>
            </div>
            <div className="flex w-3/5 justify-end" style={{ height: '800px' }}>
                {image1 && <img src={image1} alt="" />}
            </div>
        </div>
    );
}

export default Hero;