import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import OptionCard from './OptionCard';
import OptionModal from './OptionModal';

const ApoinmentOption = ({ selected }) => {
    const [options, setOptions] = useState([]);
    const [inputModal, setInputModal] = useState();

    useEffect(() => {
        fetch('apoinmentoption.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    return (
        <div className='my-20'>
            <h1 className='text-center font-bold text-secondary text-xl'>Available Appointments on {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 my-10'>
                {
                    options.map((option, i) => <OptionCard key={i} option={option} setInputModal={setInputModal}></OptionCard>)
                }
            </div>
            {
                inputModal &&
                <OptionModal
                    inputModal={inputModal}
                    selected={selected}
                    setInputModal={setInputModal}
                ></OptionModal>
            }
        </div>
    );
};

export default ApoinmentOption;