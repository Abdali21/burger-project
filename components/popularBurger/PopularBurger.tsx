"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const PopularBurger = () => {
    return (
        <div className='pt-[3rem] pb-[3rem]'>
            <h1 className='heading'>
                Our Popular <span className='text-red-600'>Burgers</span>
            </h1>
            <div className='w-[80%] mt-[4rem] mx-auto'>
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    centerMode={false}
                    infinite
                    itemClass='item'
                    responsive={responsive}
                    showDots={false}
                >
                    <BurgerCard title="Beefy Bite" image="/images/b1.png" reviews="6" price="10.88$" />
                    <BurgerCard title="Cheesy Delight" image="/images/b2.png" reviews="8" price="12.50$" />
                    <BurgerCard title="Spicy Fiesta" image="/images/b9.png" reviews="10" price="11.99$" />
                    <BurgerCard title="Veggie Crunch" image="/images/b4.png" reviews="12" price="9.99$" />
                    <BurgerCard title="Double Trouble" image="/images/b1.png" reviews="14" price="13.75$" />
                    <BurgerCard title="Classic Burger" image="/images/b6.png" reviews="7" price="9.50$" />
                    <BurgerCard title="BBQ Blast" image="/images/b7.png" reviews="9" price="11.25$" />
                    <BurgerCard title="Mushroom Melt" image="/images/b8.png" reviews="15" price="14.00$" />
                    <BurgerCard title="Ultimate Burger" image="/images/b9.png" reviews="20" price="15.50$" />
                </Carousel>
            </div>
        </div>
    )
}

export default PopularBurger
