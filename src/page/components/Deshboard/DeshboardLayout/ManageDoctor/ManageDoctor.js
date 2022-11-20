import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ManageDoctor = () => {
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('http://localhost:5000/doctors', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })
    if (isLoading) {
        return <h1 className='font-bold text-3xl text-center'>Loading....</h1>
    }

    const handleDoctorDelete = id => {
        const procced = window.confirm('Are you sure doctor Deleted?')
        if (procced) {
            fetch(`http://localhost:5000/doctors/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Doctor Deleted success')
                        refetch();
                    }
                })
                .catch(e => console.log(e))
        }

    }
    return (
        <div>
            <h1 className='text-3xl font-bold mb-5'>All Users{doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Speacialis</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.length &&
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>{doctor.name}</td>
                                <td><div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speacialist}</td>
                                <td><button onClick={() => handleDoctorDelete(doctor._id)} className='btn'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;