import { format } from 'date-fns';
import React from 'react';

const OptionModal = ({ inputModal, selected, setInputModal }) => {
    const { name, slots } = inputModal;
    const date = format(selected, 'PP')
    const handleModal = e => {
        e.preventDefault()
        const form = e.target;
        const time = form.time.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const modalInformation = {
            date,
            time,
            name,
            phone,
            email,
        }
        console.log(modalInformation)
        setInputModal(null)


    }
    return (
        <div>
            <input type="checkbox" id="doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg tex font-bold mb-6">{name}</h3>
                    <form onSubmit={handleModal}>
                        <input name='date' type="text" value={date} disabled placeholder="Type here" className="mb-6 input input-bordered w-full" />
                        <select name='time' className="select select-bordered w-full mb-6">

                            {
                                slots.map((slot, i) => <option key={i} >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full mb-6" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-6" required />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full mb-6" required />
                        <button type='submit' className="btn btn-accent w-full mb-6">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OptionModal;