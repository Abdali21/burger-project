import Image from "next/image"
import delivery from '@/public/images/delivery.svg'
import { RiEBike2Fill } from "react-icons/ri"
import { IoFastFood } from "react-icons/io5"
import { BsDoorOpen } from "react-icons/bs"

const Delivery = () => {
    return (
        <div className="pt-[8rem] pb-[3rem]">
            <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                    <Image src={delivery} alt="delivery" />
                </div>
                <div data-aos="zoom-in" data-delay="200" data-aos-anchor-placement="top-center" >
                    <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:[60px] font-bold leading-[3rem] md:leading:[4rem]">
                        Your <span className="text-red-600">Favorite Burger</span> On the Way
                    </h1>
                    <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
                        Enjoy fast and reliable delivery straight to your door. Our team ensures
                        that your food arrives hot, fresh, and ready to satisfy your cravings.
                        No matter the distance, we deliver with care and precision, ensuring every
                        order meets our high standards.

                    </p>
                    <div className="flex items-end space-x-3 mt-[2rem]">
                        <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
                        <h1 className="text-[18px] text-black font-medium">
                            Delivery in 30 minutes
                        </h1>
                    </div>
                    <div className="flex items-end space-x-3 mt-[1rem]">
                        <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
                        <h1 className="text-[18px] text-black font-medium">
                            Free shipping from 75$
                        </h1>
                    </div>
                    <div className="flex items-end space-x-3 mt-[1rem]">
                        <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
                        <h1 className="text-[18px] text-black font-medium">
                            Delivery on your Doorstep
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery
