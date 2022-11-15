import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import ReviewCard from './ReviewCard';


const Testmonial = () => {
    const reviews = [
        {
            id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'England'
        },
        {
            id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'Japan'
        },
        {
            id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'USA'
        }
    ]
    return (
        <div className='mt-20 p-14'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary font-bold text-xl mb-5'>Testimonial</h3>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <div>
                    <figure><img className='w-48' src={quote} alt="" /></figure>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10 my-10'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Testmonial;