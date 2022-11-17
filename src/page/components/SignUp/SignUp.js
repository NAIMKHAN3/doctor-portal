import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../UserContext/UserContext';


const SignUp = () => {
    const { createUser, signInGoogle, updateUserName } = useContext(AuthContex)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = data => {
        const { email, password, name } = data;
        console.log(data, name)
        createUser(email, password)
            .then(result => {
                updateUserName(name)
                    .then(result => { })
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e.message))
    }
    const handleGoogle = () => {
        signInGoogle()
            .then(result => console.log(result.user))
            .catch(e => console.log(e))
    }
    return (
        <div className='w-96 mx-auto my-20 shadow-xl rounded-lg p-7'>
            <div>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <h1 className='text-3xl text-center text-primary'>Sign Up</h1>
                    <label className="label  mt-5">
                        <span className="label-text">Name</span>
                    </label>
                    <input  {...register("name", { required: "Name Field is required" })} type="text" className="input input-bordered w-full" /> <br />
                    {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}
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
                <h6 className='text-center'>Already Have an account? <Link to='/login' className='text-secondary'>Please Log in</Link></h6>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>

            </div>
            <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SignUp;