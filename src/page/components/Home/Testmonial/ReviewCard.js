import React from 'react';

const ReviewCard = ({ review }) => {
    const { description, img, location } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center mt-5'>
                    <figure><img className='w-12 ' src={img} alt="Shoes" /></figure>
                    <p className='px-7'>{location}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;