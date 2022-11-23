import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../../UserContext/UserContext';

const MyAppoinment = () => {
    const { user } = useContext(AuthContex);
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['myappoinment', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-sable.vercel.app/myappoinment?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data
        }

    })
    if (isLoading) {
        return <button type="button" disabled="" className="flex text center w-auto mx-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"><svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18"><path className="fill-blue-800" d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"></path><path className="fill-blue-100" d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"></path></svg>
            <span>Loading...</span></button>
    }

    if (!bookings.length) {
        return <div className='flex flex-col justify-center items-center h-full text-3xl font-bold text-green-400 text-center'> <p >Your Appoints is Empty <br /> Please
            booking now</p>
            <Link to='/apoinment'><button className='btn btn-sm btn-primary text-white'>Booking</button></Link>
        </div>
    }
    return (
        <div className='p-10'>
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
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings?.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking?.treetmentname}</td>
                                    <td>{booking?.date}</td>
                                    <td>{booking?.time}</td>
                                    <td>{booking?.price}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/deshboard/paid/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-700'>Paid</span>
                                        }
                                    </td>
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