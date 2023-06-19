import { useEffect, useState } from "react";
import Cards from "./Card";

const Categories = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-2 mt-16 w-2/4">
                {products && products.map((product) => (
                    <Cards product={product} type="small" />
                ))}
            </div>
        </div>
    );
}

export default Categories;