import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../../../assets/images/fluoride.png'
import cavity from '../../../../../assets/images/cavity.png'
import teeth from '../../../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            img: fluoride,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            img: teeth,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold text-primary'>
                    OUR SERVICES
                </h2>
                <h1 className='text-4xl'>
                    Services We Provide
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 my-10'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;