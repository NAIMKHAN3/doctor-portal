import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';



const AddDoctor = () => {
    const imageKey = process.env.REACT_APP_IMAGE_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: doctorTitle = [], isLoading } = useQuery({
        queryKey: ['/adddoctor/title'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/adddoctor/title');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <h1 className='text-3xl text-center font-bold'>Loading...</h1>
    }

    const handleAddDoctor = data => {

        const image = data.image[0];
        const { name, email, speacialist } = data;
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const doctor = {
                    name,
                    email,
                    speacialist,
                    image: data.data.url
                }
                fetch('http://localhost:5000/adddoctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('Added Doctor Success')
                        }
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))

    }
    return (
        <div className='w-96 mx-auto my-20 shadow-xl rounded-lg p-7'>
            <div>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <h1 className='text-3xl text-center text-primary'>Log In</h1>
                    <label className="label  mt-5">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("name")} type="text" className="input input-bordered w-full" /> <br />
                    {errors.name && <span>This field is required</span>}
                    <label className="label  mt-5">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="email" className="input input-bordered w-full" /> <br />
                    {errors.email && <span>This field is required</span>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Speacialist</span>
                        </label>
                        <select {...register("speacialist")} className="select select-bordered">
                            {
                                doctorTitle.map(title => <option key={title._id}>{title.name}</option>)
                            }
                        </select>
                    </div>
                    <label className="label  mt-2">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register("image")} type="file" className="file-input file-input-bordered w-full mt-2" />
                    <input className='btn btn-accent w-full my-5' value={'Submit'} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;