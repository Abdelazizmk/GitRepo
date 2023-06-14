const Headline = () => {
    return (
        <div className="flex flex-col mt-12 relative"> {/*container mx-auto*/}
            <div className="">
                {/* Dot image */}
                <img src="/Dot Ornament.png" id="dot" alt="" className="absolute top-2/3 mt-2 ml-14 z-[-1]" />
                 {/* Rectangle image */}
                <img src="/Rectangle 23.png" id="rectangle" alt="" className="absolute left-3/4 top-3/4 ml-96 mt-14 z-[-1]" />
                {/* Ellipse image */}
                <img src="/Ellipse 85.png" id="ellipse" alt="" className="absolute left-2/3 ml-10 rounded-full z-[-1]" />
                <div className="relative flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold ml-28 pb-12">A Digital Product Agency</h1>
                        <p className="text-left w-4/12 ml-28 justify text-gray-600">
                            Leading digital agency with solid design and development expertise.
                            We build readymade websites, mobile applications, and elaborate online
                            business services.
                        </p>
                        <button className="flex flex-row justify-center items-center w-52 ml-28 mt-8 pt-4 pb-4 text-white text-xl font-semibold gap-x-10 rounded-full bg-blue-700">
                            Contact Now
                        </button>
                    </div>
                    <img src="/image1.png" id="image" alt="" className="h-fit w-fit ml-auto z-[10]" />
                </div>
            </div>
        </div>
    );
}

export default Headline;