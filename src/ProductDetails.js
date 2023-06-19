import React, { useEffect, useState } from "react";

const ProductDetails = () => {
    const [products, setProducts] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");

    const [amount, setAmount] = useState(1);

    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount((prevAmount) => prevAmount - 1);
        }
    };

    const increaseAmount = () => {
        setAmount((prevAmount) => prevAmount + 1);
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=4")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
                setSelectedImage(json[0].image); // Set the default image as the first image in the array
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="flex flex-col justify-center items-center mt-52">
            <div className="flex justify-center border-b-4 border-black gap-4">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        {products &&
                            products.map((product) => (
                                <img
                                    key={product.id}
                                    src={product.image}
                                    alt=""
                                    className={`w-24 cursor-pointer ${selectedImage === product.image ? "border-2 border-[#F86338]" : ""
                                        }`}
                                    onClick={() => handleImageClick(product.image)}
                                />
                            ))}
                    </div>
                    <div>
                        <img src={selectedImage} alt="" className="w-96" />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Classic Blouse IX</h1>
                    <br />
                    <h3>
                        <span className="text-[#515151]">Availability:</span> 48 in stocks
                    </h3>
                    <br />
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <h2 className="text-4xl font-bold text-[#F3692E]">{products && products[0].price}</h2>
                            <s className="mt-2 text-[#515151]">$1500</s>
                        </div>
                        <div className="flex mt-2 gap-2">
                            <h3>share</h3>
                            <div className="rounded-lg border border-1 border-gray-400 py-0 px-1">
                                <img src="share-2.png" alt="" className="w-4 h-4 mt-1.5" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <h3>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:AAOO31</h3>
                    <br />
                    <h3>Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{products && products[0].category}</h3>
                    <br />
                    <h3>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:Fashion, Classic, Blouses, Dresses</h3>
                    <br />
                    <div className="flex justify-between">
                        <div className="flex">
                            <select name="" id="" className="rounded-lg border border-2 py-2 px-4 border-black">
                                <option disabled hidden>Select Size</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>XL</option>
                                <option>2XL</option>
                            </select>
                        </div>
                        <div className="flex gap-6">
                            <button onClick={decreaseAmount}>-</button>
                            <h3 className="mt-2.5">{amount}</h3>
                            <button onClick={increaseAmount}>+</button>
                        </div>
                        <div className="flex">
                            <button className="text-[#F3692E]">Add note</button>
                        </div>
                    </div>
                    <br />
                    <div className="flex gap-4">
                        <button className="flex rounded-lg px-4 py-4 border border-2 border-[#F86338] bg-[#F86338] text-white">
                            Add to Cart&nbsp;<img src="/Shopping Cart (1).png" alt="Shopping Cart" />
                        </button>
                        <img src="/Button.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-x-14">
                <div className="w-1/2">
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="mt-6 text-[#515151] text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </p>
                </div>
                <div className="">
                    <h2 className="text-2xl font-semibold">Fabric Details</h2>
                    <div className="mt-6">
                        <ul className="space-y-4 text-[#515151] text-lg">
                            <div className="flex gap-2">
                                <img src="/Checkmark Circle.png" alt="" />
                                <li>100% Cotton</li>
                            </div>
                            <div className="flex gap-2">
                                <img src="/Checkmark Circle.png" alt="" />
                                <li>Quick Dry</li>
                            </div>
                            <div className="flex gap-2">
                                <img src="/Checkmark Circle.png" alt="" />
                                <li>Ties as Shoulder</li>
                            </div>
                            <div className="flex gap-2">
                                <img src="/Checkmark Circle.png" alt="" />
                                <li>Accusantium doloremque </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
