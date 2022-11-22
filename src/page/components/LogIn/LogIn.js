import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../UserContext/UserContext';

const LogIn = () => {
    const { signIn, signInGoogle } = useContext(AuthContex)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                fetch(`http://localhost:5000/jwt/?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        const token = data.token;
                        localStorage.setItem('token', token)
                        toast.success('login success')
                        Navigate(from, { replace: true })
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result?.user;
                const email = user?.email;
                userAddMongodb(user?.displayName, email)

                fetch(`http://localhost:5000/jwt/?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        const token = data.token;
                        localStorage.setItem('token', token)
                    })
                    .catch(e => console.log(e))
                toast.success('login success')
                Navigate(from, { replace: true })
            })
            .catch(e => console.log(e))

    }

    const userAddMongodb = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
            .catch(e => console.log(e))
    }

    return (
        <div className='w-96 mx-auto my-20 shadow-xl rounded-lg p-7'>
            <div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h1 className='text-3xl text-center text-primary'>Log In</h1>
                    <label className="label  mt-5">
                        <span className="label-text">Email</span>
                    </label>
                    <input  {...register("email", { required: "Email Field is required" })} type="email" className="input input-bordered w-full" /> <br />
                    {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
                    <label className="label mt-5">
                        <span className="label-text">Password</span>
                    </label>
                    <input  {...register("password", { required: "Password Field is required", minLength: { value: 8, message: 'Password must be 8 characters or longer' }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } })} type="password" className="input input-bordered w-full " /> <br />
                    {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}
                    <label className="label">
                        <span className="label-text-alt">Forget Password?</span>
                    </label>
                    <input className='btn btn-accent w-full my-5' value={'Submit'} type="submit" />
                </form>
                <h6 className='text-center'>New to Doctor Portal? <Link to='/signup' className='text-secondary'>Create new Account</Link></h6>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default LogIn;