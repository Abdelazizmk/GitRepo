import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/5')
            .then((res) => res.json())
            .then((json) => {
                setCart(json);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    }, []);

    useEffect(() => {
        if (cart) {
            const fetchProductDetails = async () => {
                const productPromises = cart.products.map((item) =>
                    fetch(`https://fakestoreapi.com/products/${item.productId}`).then((res) => res.json())
                );
                const products = await Promise.all(productPromises);
                setCartItems(products);
                console.log(cartItems);
            };

            fetchProductDetails();
        }
    }, [cart]);

    return (
        <div className='mt-52'>
            <div className='container ml-20'>
                <h1 className="text-5xl text-center font-semibold ">Cart</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <ul className="flex justify-between mt-10">
                    <div>{/* Intended to be left empty */}</div>
                    <div className="flex flex-none justify-between items-center gap-44 py-4 px-16 rounded-lg border border-2 border-[#F86338] bg-[#F86338] text-lg font-semibold">
                        <li>Product Name</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </div>
                    <div>{/* Intended to be left empty */}</div>
                </ul>
                <ul className="flex flex-col">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between mr-10 mt-4">
                            <img src={item.image} alt="" className="w-12 h-12" />
                            &nbsp;&nbsp;
                            <div className="flex flex-grow justify-between items-center gap-x-44 mr-7">
                                <span className="w-32">{item.title}</span>
                                <span>{item.price}</span>
                                <span className='ml-8'>10</span>
                                <span className='ml-8'>{item.price * item.quantity}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-36 mt-12 ml-3">
                    <div className="flex flex-col justify-center items-start gap-6 pl-10 rounded-md border border-1 border-[#FFEFEB] bg-[#FFEFEB] h-64 w-96">
                        <label className="text-2xl font-semibold">Have a Coupon?</label>
                        <input
                            type="text"
                            placeholder="Input your email here"
                            className="rounded-md pr-12 pl-2 py-2 border border-1 border-[#F86338] bg-[#FFEFEB] text-[#9A9AB0]"
                        />
                        <button className="rounded-lg py-2 px-3 border border-2 border-[#F86338] bg-[#F86338] text-white">
                            Apply Coupon
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <h1 className="text-4xl">Cart Totals</h1>
                        <h2 className="mt-4">
                            <span className="font-semibold">Subtotal</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$150
                        </h2>
                        <h2>
                            <span className="font-semibold">Shipping</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free Shipping
                        </h2>
                        <h2 className="ml-24">
                            Shipping to Sidney<a href="/" className="text-[#F86338] ml-4">Change</a>
                        </h2>
                        <h2>
                            <span className="font-semibold">Total</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$350
                        </h2>
                        <button className="rounded-md border border-2 border-[#F86338] bg-[#F86338] px-8 py-2 w-80 text-white">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
