import { useEffect, useState } from "react";

const PathHero = (props) => {
    
    const path = props.path;
    const page = props.page;
    
    return (  
        <div className="flex justify-between mt-4">
            <div className="mt-64 ml-64">
                <p className="pt-8 text-gray-400 text-xl">{path}</p>
                <br/>
                <h1 className="text-6xl font-semibold">{page}</h1>
            </div>
            <div className="flex w-3/5 justify-end" style={{ height: '800px' }}>
               <img src="blank.jfif" alt="" /> {/* No specific Image was shown or described. */}
            </div>
        </div>
    );
}
 
export default PathHero;