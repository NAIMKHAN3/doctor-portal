import React from 'react';
import doctor from '../../../../assets/images/doctor-small.png'
import apoinment from '../../../../assets/images/appointment.png'

const Apoinment = () => {
    return (
        <div className="hero mt-36" style={{ background: `url(${apoinment})` }}>
            <div className="hero-content flex-col lg:flex-row lg:px-24">
                <img src={doctor} className=" w-1/2 -mt-24 rounded-lg hidden lg:block" alt='' />
                <div className='text-white'>
                    <h3 className='text-primary font-bold text-xl mb-5'>Appointment</h3>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Apoinment;