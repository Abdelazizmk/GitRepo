import { useEffect, useState } from "react";
import Card from "./Card";

const CategoriesShop = () => {
    
    const [products , setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=12')
        .then(res => res.json())
        .then(json => {
            setProducts(json);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
    },[]);
    
    
    return (
        <div className="mt-32">
            <div>
                <nav className="">
                    <ul className="flex items-center justify-between text-lg font-semibold text-[#9A9AB0]">
                        <li className="pl-64">All</li>
                        <li>Dresses</li>
                        <li>Shirts and Tops</li>
                        <li>Sweaters&Cardigans</li>
                        <li>Outwears</li>
                        <li>Bags</li>
                        <li>Shoes</li>
                        <li>Acessories</li>
                        <li className="pr-64">More</li>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center mt-24">
                <div className="grid grid-cols-4 gap-x-4 gap-y-9 w-4/5">
                    { products && products.map((product) => (
                        <Card product={product} type="brief" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoriesShop;