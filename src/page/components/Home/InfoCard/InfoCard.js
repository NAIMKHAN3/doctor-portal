import React from 'react';

const InfoCard = ({ info }) => {
    const { name, location, img, bg } = info;
    return (
        <div className={`card lg:card-side  shadow-xl ${bg} text-white lg:px-8`}>
            <figure><img className='mt-4' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default InfoCard;