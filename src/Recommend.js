import { useState, useEffect } from "react";
import Card from './Card';

const Recommend = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setProducts(json);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }, []);


    return (
        <div className=" mt-32">
            <h1 className='font-bold text-7xl ml-56'>Recommended for you</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-4 justify-center items-center mt-24 gap-y-8 gap-x-4 w-4/5">
                    {products && products.map((product) => (
                        <Card product={product} type="small" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommend;