import { TeamProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const TeamCard = ({ image, name, position }: TeamProps) => {
    return (
        <div>
            <Image src={image} alt={name} height={400} width={400} className='rounded-2xl' />
            <h1 className='text-[40px] etext-gray-800 mt-[1.5rem]  text-center font-bold'>
                {name}
            </h1>
            <p className='mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600
                        text-white mx-auto w-fit font-medium'>
                {position}
            </p>
            <p className='text-center md:w-[70%] mx-auto text-gray-60 mt-[1rem]'>
                Our team is a group of dedicated professionals who share a passion for creating exceptional food.
                With a commitment to quality and creativity, we work together to bring you the best
            </p>
        </div>
    )
}

export default TeamCard
