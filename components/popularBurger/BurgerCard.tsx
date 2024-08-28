import { BurgerCardProps } from "@/types"
import Image from "next/image"
import { BiShoppingBag } from "react-icons/bi"
import { FaStar } from "react-icons/fa"

const BurgerCard = ({ title, image, reviews, price }: BurgerCardProps) => {
    return (
        <div className="bg-white rounded-lg p-6 m-3">
            <div className="h-[200px] w-[200px] mx-auto">
                <Image
                    src={image}
                    alt={title}
                    height={200}
                    width={200}
                    className="h-[100%] w-[100%] object-cover"
                />
            </div>
            <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
                {title}
            </h1>
            <div className="flex items-center mt-[0.5rem] space-x-3">
                <div className="flex items-center ">
                    <FaStar className="h-[1rem] w-[1rem] text-yellow-600" />
                    <FaStar className="h-[1rem] w-[1rem] text-yellow-600" />
                    <FaStar className="h-[1rem] w-[1rem] text-yellow-600" />
                    <FaStar className="h-[1rem] w-[1rem] text-yellow-600" />
                    <FaStar className="h-[1rem] w-[1rem] text-yellow-600" />
                </div>
                <div className="text-black opacity-80">
                    ({reviews})
                </div>
            </div>
            <p className="mt-[0.5rem] text-black text-opacity-70">
                Savor the rich flavors and quality ingredients in every bite of our delicious burgers.
            </p>
            <div className="flex mt-[1.4rem] items-center justify-between">
                <h1 className="text-[25px] font-bold text-red-600">
                    {price}
                </h1>
                <button className="px-4 py-2 hover:bg-green-700 transition-all duration-200
                                 bg-orange-600 flex items-center rounded-md text-white">
                    <BiShoppingBag className="w-[1.3rem] h-[1.3rem]" />
                </button>
            </div>
        </div>
    )
}

export default BurgerCard
