const Discount = () => {
    return (
        <div className="flex justify-center items-center text-white mt-32">
            <div className="flex flex-col mt-24 justify-center items-center gap-4 border border-4 border-[#F86338] bg-[#F86338] w-3/4 h-[500px]">
                <h2 className="text-3xl">March Discount</h2>
                <h1 className="text-8xl">Up to 70% off</h1>
                <button className="flex items-center mt-6 text-[#7A6005] py-4 px-6 rounded-lg border border-4 border-white bg-white">
                    Got it<span className="mx-1">&gt;</span>
                </button>
            </div>
        </div>
    );
}

export default Discount;