import React, { useState } from 'react';
import chair from '../../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../../../assets/images/bg.png'

const AppoinmentBanner = ({ selected, setSelected }) => {

    return (
        <div className="hero" style={{ background: `url(${bg})`, backgroundImage: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg lg:w-1/3 w-full" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={data => {
                            if (data) {
                                setSelected(data)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;