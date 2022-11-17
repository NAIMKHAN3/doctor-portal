import React from 'react';

const OptionCard = ({ option, setInputModal }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-primary">{name}</h2>
                    <p>{slots[0]}</p>
                    <p>{slots?.length} spaces available</p>
                    <div className="card-actions justify-center ">
                        <label onClick={() => setInputModal(option)} htmlFor="doctor-modal" className="btn btn-primary text-white">BOOK APPOINMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionCard;