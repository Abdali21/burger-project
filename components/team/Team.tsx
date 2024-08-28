import TeamCard from "./TeamCard"

const Team = () => {
    return (
        <div className="pt-[5rem] pb-[5rem]">
            <h1 className="heading">
                MEET Our expert <span className="text-red-600">chefs</span>
            </h1>
            <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-3 gap-[3rem]
                            items-center">
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                    <TeamCard image="/images/t1.jpg" name="Abdali Houmaidi" position="Kitchen Porter " />
                </div>
                <div data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-center" >
                    <TeamCard image="/images/t2.jpg" name="Ahmed ahmadi" position="Executive chef " />
                </div>
                <div data-aos="fade-right"  data-aos-delay="400"  data-aos-anchor-placement="top-center" >
                    <TeamCard image="/images/t3.jpg" name="Ayoub hafidi" position="Head chef " />
                </div>
            </div>
        </div>
    )
}

export default Team
