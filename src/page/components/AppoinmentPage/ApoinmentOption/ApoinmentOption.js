import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import OptionCard from './OptionCard';
import OptionModal from './OptionModal';

const ApoinmentOption = ({ selected }) => {
    const [inputModal, setInputModal] = useState();
    const date = format(selected, 'PP')
    console.log(date)

    const { data: options = [], refetch } = useQuery({
        queryKey: ['appoinmentoption', date],
        queryFn: () => fetch(`http://localhost:5000/appoinmentoption?date=${date}`).then(res => res.json())
    })



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
                    refetch={refetch}
                    inputModal={inputModal}
                    selected={selected}
                    setInputModal={setInputModal}
                ></OptionModal>
            }
        </div>
    );
};

export default ApoinmentOption;