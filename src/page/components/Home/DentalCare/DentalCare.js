import React from 'react';
import treethment from '../../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero lg:px-48 my-20">
            <div className="hero-content flex-col lg:flex-row items-center">
                <img src={treethment} className=" w-96 lg:w-1/3 rounded-lg " alt='' />
                <div className='p-8'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;