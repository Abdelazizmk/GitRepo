import { useEffect, useState } from "react";
import Card from "./Card";
import Discount from "./Discount";

const SearchShop = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }, []);

    return (
        <div className="grid grid-cols-3 w-4/5 justify-center items-center ml-64">
            <div>
                <aside className="ml-12 mb-[700px]">
                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-semibold">Price</h1>
                                <img src="/Filter.png" alt="" className="mr-32" />
                                <div></div>
                            </div>
                            <img src="/PriceBar.png" alt="" />
                            <div className="flex justify-between">
                                <h3>Range</h3>
                                <h3 className="mr-32">$5-$20</h3>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">Color</h1>
                            <div className="grid grid-cols-4 gap-3 gap-x- mt-4">
                                {Array(8).fill().map((_, index) => (
                                    <div key={index} className="flex items-center justify-start">
                                        <div className="rounded-full w-8 h-8 bg-blue-500"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <h1 className="text-2xl font-semibold">Categories</h1>
                            <ul className="flex flex-col text-lg font-semibold text-[#9A9AB0] gap-2 mt-8">
                                <li>All</li>
                                <li>Dresses</li>
                                <li>Shirts and Tops</li>
                                <li>Sweaters&Cardigans</li>
                                <li>Outwears</li>
                                <li>Bags</li>
                                <li>Shoes</li>
                                <li>Acessories</li>
                                <li>More</li>
                            </ul>
                            <a href="" className="text-[#F3692E]">Load More</a>
                        </div>
                    </div>
                    <Discount />
                </aside>
            </div>
            <div className="flex flex-col mt-32 col-span-2">
                <div> {/*search bar and filter */}
                    <div className="flex rounded-md justify-between border border-2 py-2 px-4 border-black">
                        <input type="text" placeholder="Search Products" className="focus:outline-none w-full" />
                        <img src="/Search.png" alt="" />
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2>showing 1-9 Results</h2>
                            </div>
                            <div>{/* Intended to be left empty */}</div>
                            <div className="flex justify-between items-center gap-4">
                                <h2>Sort by</h2>
                                <select name="" id="" className="rounded-lg border border-2 py-2 px-4 border-black">
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>Highest Rating</option>
                                    <option>Lowest Price</option>
                                </select>
                                <img src="/MenuList.png" alt="" />
                                <img src="/MenuGrid.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div> {/* Card grid */}
                    <div className="grid grid-cols-4 gap-x-4 gap-y-24 mt-12">
                        {products && products.map((product) => (
                            <Card product={product} type="brief" />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-12">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-l">
                        Previous
                    </button>
                    <div className="flex">
                        <button className="bg-gray-500 text-white px-4 py-2">1</button>
                        <button className="bg-gray-500 text-white px-4 py-2">2</button>
                        <button className="bg-gray-500 text-white px-4 py-2">3</button>
                        <button className="bg-gray-500 text-white px-4 py-2">4</button>
                        <button className="bg-gray-500 text-white px-4 py-2">5</button>
                    </div>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-r">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchShop;