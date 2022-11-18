import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: () => fetch('http://localhost:5000/allusers')
            .then(res => res.json())
    })
    return (
        <div>
            <h1 className='text-3xl font-bold'>All Users</h1>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td><button className='btn btn-outline'>Admin</button></td>
                                    <td><button className='btn btn-outline'>Delete</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;