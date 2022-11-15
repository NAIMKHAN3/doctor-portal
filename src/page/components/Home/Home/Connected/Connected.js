import React from 'react';
import apoinment from '../../../../../assets/images/appointment.png'

const Connected = () => {
    return (
        <div style={{ background: `url(${apoinment})` }}>
            <div className='w-1/2 mx-auto py-16'>
                <div className='text-center'>
                    <h3 className='text-primary font-bold text-xl '>Contact Us</h3>
                    <p className='text-3xl text-white'>Stay connected with us</p>
                </div>
                <div className='text-center'>
                    <input type="text" placeholder="Email Address" className="input input-bordered lg:w-96 w-full mt-3" /> <br />
                    <input type="text" placeholder="Subject" className="input input-bordered lg:w-96 w-full mt-3" /> <br />
                    <textarea className="textarea lg:w-96 w-full mt-3" placeholder="Your message"></textarea> <br />
                    <button className="btn btn-primary w-36 mt-5 text-white bg-gradient-to-r from-primary to-secondary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Connected;