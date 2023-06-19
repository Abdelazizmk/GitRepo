const Checkout = () => {
    return (
        <div className="mt-32 mr-[420px] flex justify-center">
            <div></div> {/* Empty div before the form */}
            <form className="flex flex-col gap-6">
                <h1 className="text-5xl font-semibold">Checkout</h1>
                <div className="flex flex-col">
                    <label className="text-2xl font-semibold">Email Address</label>
                    <input
                        type="text"
                        placeholder="Email address"
                        className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                    />
                </div>
                <h3 className="text-[#9A9AB0]">Already have an account? Sign in</h3>
                <h1 className="text-2xl font-semibold">Shipping Address</h1>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <label className="text-2xl font-semibold">First Name</label>
                        <input
                            type="text"
                            placeholder="First name"
                            className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-2xl font-semibold">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-2xl font-semibold">Address Line</label>
                    <input
                        type="text"
                        placeholder="Address line"
                        className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-2xl font-semibold">Country</label>
                    <input
                        type="text"
                        placeholder="Indonesia"
                        className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <label className="text-2xl font-semibold">Postal Code</label>
                        <input
                            type="text"
                            placeholder="Postal Code"
                            className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-2xl font-semibold">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="rounded-lg border border-2 border-[#F86338] px-8 py-2"
                        />
                    </div>
                </div>
                <label className="text-2xl font-semibold">Billing Address</label>
                <div className="flex gap-2">
                    <img src="/Checkmark Circle.png" alt="" />
                    <h2>Same as shipping address</h2>
                </div>
                <button className="rounded-lg border border-2 border-[#F86338] bg-[#F86338] px-8 py-2 w-[520px] text-white">
                    Continue
                </button>
            </form>
            <div></div> {/* Empty div after the form */}
        </div>
    );
};

export default Checkout;
