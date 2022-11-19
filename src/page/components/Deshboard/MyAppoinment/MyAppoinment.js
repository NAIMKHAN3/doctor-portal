import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { AuthContex } from '../../../../UserContext/UserContext';

const MyAppoinment = () => {
    const { user } = useContext(AuthContex);
    const [isLoading, setIsLoading] = useState(true)
    const { data: bookings = [], } = useQuery({
        queryKey: ['myappoinment', user?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/myappoinment?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                setIsLoading(!isLoading)
                return res.json()
            }
            )
    })
    return (
        <div className='p-10'>
            {
                isLoading && <p className='text-center'>Loading....</p>
            },
            <h1 className='text-3xl font-bold'>My Appoinment</h1>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Treetment</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking?.treetmentname}</td>
                                    <td>{booking?.date}</td>
                                    <td>{booking?.time}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppoinment;