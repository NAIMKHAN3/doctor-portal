import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaidOption = () => {
    const booking = useLoaderData();
    const { treetmentname, price, date, time } = booking

    return (
        <div>
            <h1 className='text-3xl font-bold my-3'>Payment For {treetmentname}</h1>
            <p>Please Pay <strong>${price}</strong> To Your Appoinmet On {date} At {time}</p>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaidOption;