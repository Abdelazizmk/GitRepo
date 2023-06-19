const Footer = () => {
    return (
        <div className="mt-64 bg-[#F86338] h-96">
            <div className="grid grid-cols-3 ml-32 text-white">
                <div className="flex flex-col items-start justify-between mt-8">
                    <img src="/Logo2.png" alt="" />
                    <p className="text-lg">
                        OurStudio is a digital agency UI / UX Design and Website<br />
                        Development located in Ohio, United States of America
                    </p>
                    <h3 className="mt-28">Copyright Tanah Air Studio</h3>
                </div>
                <div className="mt-28 ml-32">
                    <h3 className="font-semibold">Our Social Media</h3>
                    <nav className="mt-6">
                        <ul className="space-y-4">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-28">
                    <h3 className="font-semibold">Contact</h3>
                    <nav className="mt-6">
                        <ul className="space-y-6">
                            <div className="flex items-start gap-2">
                                <img src="/Location.png" alt="" />
                                <li>8819 Ohio St. South Gate,<br/>
                                    California 90280
                                </li>
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="/email.png" alt="" />
                                <li>ourstudio@hello.com</li>
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="call.png" alt="" />
                                <li>+271 386-647-3637</li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Footer;