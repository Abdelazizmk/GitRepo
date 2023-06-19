import { useState, useEffect } from 'react';
import Card from './Card';


const BestSeller = (props) => {

    const title = props.title;
    
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }, []);
    
    return (  
        <div className='mt-56'>
            <h1 className='font-bold text-8xl ml-56'>{title}</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-4 gap-4 mt-12 w-4/5">
                    { products && products.map((product) =>(
                        <Card product={product} type="brief" />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default BestSeller;