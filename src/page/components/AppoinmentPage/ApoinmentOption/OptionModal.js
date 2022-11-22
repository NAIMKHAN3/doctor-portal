import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../../../UserContext/UserContext';

const OptionModal = ({ inputModal, selected, setInputModal, refetch }) => {
    const { user } = useContext(AuthContex)
    const { name, slots, price } = inputModal;
    const date = format(selected, 'PP')
    const handleModal = e => {
        e.preventDefault()
        const form = e.target;
        const time = form.time.value;
        const username = form.username.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const modalInformation = {
            treetmentname: name,
            time,
            date,
            price,
            username,
            email,
            phone,
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modalInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setInputModal(null)
                    toast.success('appoinment success')
                    refetch();
                }
                else {
                    toast.error(data.message)
                    setInputModal(null)
                }
            })
            .catch(e => console.log(e))



    }
    return (
        <div>
            <input type="checkbox" id="doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg tex font-bold mb-6">{name} Price: ${price}</h3>
                    <form onSubmit={handleModal}>
                        <input name='date' type="text" value={date} disabled placeholder="Type here" className="mb-6 input input-bordered w-full" />
                        <select name='time' className="select select-bordered w-full mb-6">

                            {
                                slots.map((slot, i) => <option key={i} >{slot}</option>)
                            }
                        </select>
                        <input name='username' type="text" placeholder="Full Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full mb-6" required />
                        <input name='email' type="text" placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered w-full mb-6" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-6" required />
                        <button type='submit' className="btn btn-accent w-full mb-6">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OptionModal;