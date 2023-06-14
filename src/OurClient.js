const OurClient = () => {
    return (
        <div className="relative flex place-items-center container grid grid-cols-5 gap-x-8 mt-52 ml-96">
            <div className="rows-start-1 cols-start-1">
                <h2 className="font-bold text-4xl mb-8">Our Client</h2>
                <p className="text-gray-600">Several selected clients, who already believe in our service.</p>
            </div>
            <div className="grid rows-start-1 cols-start-2">
                <img src="./Google Logo.png" alt="" />
            </div>
            <div className="grid rows-start-1 cols-start-3">
                <img src="./Airbnb Logo.png" alt="" />
            </div>
            <div className="grid rows-start-1 cols-start-4">
                <img src="./Uber Eats Logo.png" alt="" />
            </div>
            <div className="grid rows-start-1 cols-start-5">
                <img src="./Amazon Logo.png" alt="" />
            </div>
        </div>
    );
}

export default OurClient;