import React from "react";


const Card = (props) => {
    const product = props.product;
    const type = props.type;

    if (!product || !product.image) {
        // Return placeholder content or error message
        return (
          <div className="card-placeholder">
            Image not available
          </div>
        );
      }

    var small = false;
    var brief = false;
    var long = false;

    if (type === 'small') {
        small = true;
    } else if (type === 'brief') {
        brief = true;
    } else if (type === 'long') {
        long = true;
    }



    return (
        <React.Fragment>
            {small &&
                <div className="flex flex-col justify-center items-center gap-6 w-3/4">
                    <div className="justify-center items-center h-full w-full">
                        <img src={product.image} alt="" className=""/>
                    </div>
                    <h1 className="font-bold text-xl">{product.title}</h1>
                    <h3 className="font-bold text-[#F3692E] text-3xl">{product.price}</h3>
                </div>
            }
            {brief && <div className="relative flex flex-col justify-center items-center gap-6">
                <div className="flex border border-2 border-gray-400 justify-center items-center h-full">
                    <button>
                        <img src="/HeartRed.png" alt="" className="absolute top-6 right-6 rounded-full border border-4 border-gray-400 bg-gray-400 w-10 h-10" />
                    </button>
                    <img src={product.image} alt="" className="w-3/4" />
                </div>
                <h3 className="font-semibold text-[#F3692E]">{product.category}</h3>
                <h1 className="font-bold text-xl">{product.title}</h1>
                <h3 className="text-[#515151]">{product.category}</h3> {/* but why tho */}
                <h2 className="font-bold text-[#F3692E] text-3xl">${product.price}</h2>
            </div>}
            {long && <div className="relative border border-2 bg-gray-400 border-black">
                <img src={product.image} alt="" className="w-full h-full" />
                <div className="absolute top-64 left-4 w-auto">
                    <h1 className="text-4xl text-red-600 font-semibold w-3/5">{product.title}</h1>
                    <p className="text-gray-300 text-lg">
                        {product.description}
                    </p>
                    <button className="rounded-full bg-[#F86338] text-white text-2xl mt-6 py-2 px-3.5">→</button>
                </div>
            </div>}
        </React.Fragment>
    );
}

export default Card;