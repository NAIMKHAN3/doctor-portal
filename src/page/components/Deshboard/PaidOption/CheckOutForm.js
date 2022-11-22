import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [succeeded, setSucceeded] = useState('')
    const [tranzaction, setTranzaction] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price, username, email, _id } = booking

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        const card = elements.getElement(CardElement)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
        }
        if (paymentIntent?.status === "succeeded") {
            const payment = {
                price,
                bookingId: _id,
                transactionId: paymentIntent.id,
                email,
            }
            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setSucceeded('congrats! your paymant is succeeded')
                    setTranzaction(paymentIntent.id)
                })
                .catch(e => console.log(e))

        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-700'>{cardError}</p>
            }
            {
                succeeded && <div>
                    <p className='text-green-500'>Success : {succeeded}</p>
                    <p>Your tranxiction ID: {tranzaction}</p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;