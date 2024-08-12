function Navbar() {
    return (
        <div className="flex justify-center">
            <nav className="border-gray-250 bg-orange-100 font-['roboto'] border-b-2 relative w-[1300px]">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <a href="#" className="text-2xl font-semibold bg-black text-white rounded-md px-1 border-[3px] border-orange-400 whitespace-nowrap">BIKE RENTAL</a>
                    <div className="flex space-x-5">
                        <a href="#" className="py-2 px-3 text-black font-semibold text-[17px] hover:text-gray-600">HOME</a>
                        <a href="#" className="py-2 px-3 text-black font-semibold text-[17px] hover:text-gray-600">BIKES</a>
                        <a href="#" className="py-2 px-3 text-black font-semibold text-[17px] hover:text-gray-600">DESTINATION</a>
                        <a href="#" className="py-2 px-3 text-black font-semibold text-[17px] hover:text-gray-600">REVIEWS</a>
                    </div>
                    <div className="flex space-x-3">
                        <button type="button" className="text-white bg-black hover:bg-orange-300 font-medium rounded-lg text-md px-4 py-2 text-center">LOGIN</button>
                        <button type="button" className="text-white bg-black hover:bg-orange-300 font-medium rounded-lg text-md px-4 py-2 text-center">SIGN UP</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
