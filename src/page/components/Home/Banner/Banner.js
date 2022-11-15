import React from 'react';
import chair from '../../../../assets/images/chair.png'
import bg from '../../../../assets/images/bg.png'
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';


const Banner = () => {
    const info = [
        {
            id: 1,
            name: 'Opening Hours',
            location: 'Lorem Ipsum is simply dummy text of the pri',
            bg: 'bg-primary bg-gradient-to-r from-primary to-secondary',
            img: clock
        },
        {
            id: 2,
            name: 'Visit our location',
            location: 'Lorem Ipsum is simply dummy text of the pri',
            bg: 'bg-accent',
            img: marker
        },
        {
            id: 3,
            name: 'Contact us now',
            location: 'Lorem Ipsum is simply dummy text of the pri',
            bg: 'bg-primary bg-gradient-to-r from-primary to-secondary',
            img: phone
        },
    ]
    return (
        <div>
            <div
                style={{ background: `url(${bg})`, backgroundImage: 'cover', opacity: '0.8' }}
                className="hero py-24 sm:px-10">
                <div style={{ opacity: '1.5' }} className="hero-content flex-col lg:flex-row-reverse items-center">
                    <img src={chair} className="lg:w-1/2 w-full px-10 rounded-lg  mb-10" alt='' />
                    <div style={{ opacity: '1.0.' }}>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
                {
                    info.map(info => <InfoCard key={info.id} info={info}></InfoCard>)
                }
            </div>


        </div>
    );
};

export default Banner;