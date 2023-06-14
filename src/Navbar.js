const Navbar = () => {
    return ( 
        <div className="flex flex-row items-center justify-between h-32">
            <h2 className="ml-24 text-2xl text-left">
                <span className="font-bold">A+</span> Studio
            </h2>
            <div className="flex space-x-16 mr-16 font-medium">
                <a disabled href="/" className="home">Home</a>
                <a disabled href="/" className="what-we-do">What We Do</a>
                <a disabled href="/" id="service">Service</a>
                <a disabled href="/" id="project">Project</a>
                <a disabled href="/" id="blog">Blog</a>
                <a disabled href="/" id="contact">Contact</a>
            </div>
        </div>
    );
}
 
export default Navbar;
