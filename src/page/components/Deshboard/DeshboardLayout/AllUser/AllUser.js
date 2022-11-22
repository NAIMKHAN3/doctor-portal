import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUser = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: () => fetch('http://localhost:5000/allusers')
            .then(res => res.json())
    })
    const handleUpdate = id => {
        fetch(`http://localhost:5000/user/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Make a Admin success')
                refetch()
            })
            .catch(e => console.log(e))
    }
    const handleDelete = email => {
        const proceed = window.confirm(`Are you sure, you want to delete ${email}`);
        if (proceed) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('User Delete successfull')
                    refetch()
                })
                .catch(e => console.log(e))
        }

    }
    return (
        <div>
            <h1 className='text-3xl font-bold'>All Users{users.length}</h1>
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
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleUpdate(user?._id)} className='btn btn-primary btn-sm text-white'>Admin</button>}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleDelete(user?.email)} className='btn btn-error btn-sm text-white'>Delete</button>}</td>
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