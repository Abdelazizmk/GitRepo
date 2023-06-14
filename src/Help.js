const Help = () => {
    return (
        
        /*const x = [
            {title: '', content:'', image:'', color:''},
            {title: '', content:'', image:'', color:''},
            {title: '', content:'', image:'', color:''}
        ];*/
        
        
        
        
        <div className="relative flex container grid grid-cols-3 grid-rows-2 mt-80">
            {/* <img src="/dot2.png" alt="" className="absolute" />
            <img src="/smallrect.png" alt="" className="absolute" />
            <img src="/bigrect.png" alt="" className="absolute" />
            <img src="/Ellipse 87.png" alt="" className="absolute" /> */}
            <div className="cols-start-1">
                <h2>How can we help your Business?</h2>
                <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
            </div>
            <div className="cols-start-2 row-span-2">
                <div className="rows-start-1 justify-center items-center text-center w-full" >
                    <div className="h-32 w-32 mx-auto border rounded-lg bg-[#F1F7FF]">
                        <img src="/box-search 1.png" alt="" className="mx-auto mt-4" />
                    </div>
                    <h3>Business Idea Planning</h3>
                    <p>We present you a proposal and discuss niffty-gritty like</p>
                </div>
                <div className="rows-start-2 justify-center items-center text-center w-full">
                    <div className="h-32 w-32 mx-auto border rounded-lg bg-[#F1F7FF]">
                        <img src="code-1 1.png" alt="" className="mx-auto mt-4" />
                    </div>
                    <h3>Development Website and App</h3>
                    <p>Communication protocols apart from engagement models</p>
                </div>
            </div>
            <div className="cols-start-3 row-span-2">
                <div className="row-start-1 justify-center items-center text-center w-full">
                    <div className="h-32 w-32 mx-auto border rounded-lg bg-[#F1F7FF]">
                        <img src="/empty-wallet 1.png" alt="" className="mx-auto mt-4" />
                    </div>
                    <h3>Financial Planning System</h3>
                    <p>Protocols apart from aengage models, pricing billing</p>
                </div>
                <div className="rows-start-2 justify-center items-center text-center w-full">
                    <div className="h-32 w-32 mx-auto border rounded-lg bg-[#F1F7FF]">
                        <img src="chart-square 1.png" alt="" className="mx-auto mt-4" />
                    </div>
                    <h3>Market Analysis Project</h3>
                    <p>Protocols apart from aengage models, pricing billing</p>
                </div>
            </div>
        </div>
    );
}

export default Help;