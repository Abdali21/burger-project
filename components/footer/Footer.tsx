import { FaBurger, FaFacebook, FaInstagram, FaX, FaYoutube } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 items-start
                            mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]"
            >
                <div>
                    <div className="flex items-center text-white space-x-2">
                        <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
                        <h1 className="text-[20px] sm:text-[30px] font-semibold">
                            BurgerBit
                        </h1>
                    </div>
                    <p className="text-white text-opacity-60 mt-[0.4rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quisquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque?
                    </p>
                    <p className="mt-[1rem] text-white">burger@gmail.com</p>
                    <p className="text-red-300 text-[19px] font-bold">(+212) 123 123 123</p>
                </div>
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Products</h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Chiken Burger
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Beef Burger
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Crispy Burger
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Clasic Burger
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Delight Burger
                    </p>
                </div>
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Quick link</h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Home
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        About
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Menu
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Products
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200">
                        Newsletter
                    </p>
                </div>
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white uppercase">Opening Hours</h1>
                    <p className="text-white text-[18px]">
                        Monday -  Friday : <span className="text-yellow-300">8am - 4pm</span>
                    </p>
                    <p className="text-white text-[18px]">
                        Saturday : <span className="text-yellow-300">8am - 12pm</span>
                    </p>
                    <div className="flex mt-[2rem] items-center space-x-6">
                        <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400" />
                        <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
                        <FaYoutube className="w-[1.5rem] h-[1.5rem] text-red-600" />
                    </div>
                </div>
            </div>
            <p className="text-white text-center text-opacity-50 mt-[1.5rem]">
                Copyright @ 2024
                 <a className="underline text-yellow-300 ml-2" href="https://www.linkedin.com/in/abdelali-houmaidi-72b123293/">
                     Abdelali Houmaidi
                </a>
            </p>
        </footer>
    )
}

export default Footer
