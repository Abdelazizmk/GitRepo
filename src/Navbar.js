const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center ml-12">
                    <img src="/Phone.png" alt="Phone" />
                    <h1 className="ml-2 font-semibold">+022 319 821 967</h1>
                </div>
                <div className="flex items-center">
                    <img src="/Logo.png" alt="Logo" />
                </div>
                <div className="flex items-center mr-24 space-x-4">
                    <img src="/fb.png" alt="Facebook" />
                    <img src="/tw.png" alt="Twitter" />
                    <img src="/lg.png" alt="LinkedIn" />
                    <img src="/yt.png" alt="YouTube" />
                </div>
            </div>
            <div className="mt-8">
                <nav className="flex items-center justify-between">
                    <ul className="flex items-center space-x-9 ml-12">
                        <li className="font-semibold">Home</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                    <div className="flex items-center space-x-8 mr-24">
                        <img src="/Heart.png" alt="" />
                        <img src="/Shopping Cart.png" alt="" />
                        <img src="/User.png" alt="" />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;