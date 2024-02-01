
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
function CreateAccount() {
    const {register, handleSubmit, formState:{errors}, watch} = useForm({mode: 'onChange'});
  

    const handleCreateAccount = (data) => {
            console.log(data)
    }
    const password = watch('password');
  return (
    <main className='w-screen  h-screen bg-gray-50 flex justify-center items-center pb-10 pt-10  overflow-x-hidden overflow-y-auto'>
    <div className=" w-1/3 bg-white rounded shadow-lg p-8 flex flex-col gap-8 mt-10 ">
        <h1 className="text-lg text-black text-center font-semibold">Create Account</h1>
        <form  className='flex flex-col gap-4' onSubmit={handleSubmit(handleCreateAccount)}>
            <div>
            <input className=' w-full px-3 py-2 h-12 border border-[#f6f6f6f] rounded' type='text'  placeholder='Enter Full name'  {...register('fullname', {required: true})} />
            {errors.fullname && <p className='text-red-200'>Please enter fullname!</p>}
            </div>
            <div>
            <input className=' w-full px-3 py-2 h-12 border border-[#f6f6f6f] rounded' type='email' placeholder='Enter email' {...register('email', {required: 'Email can not be empty', pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message:'Email not of partern'}})} />
            {errors.email && <span className='text-red-200'>{errors.email.message}</span>}
            </div>
            <div>
            <input className='w-full px-3 py-2 h-12 border border-[#f6f6f6f] rounded appearance-none ' type='number'  placeholder='Enter phone number' {...register('phone', {required: true})} />
            </div>
            <div>
            <input  className='w-full px-3 py-2 h-12 border border-[#f6f6f6f] rounded' type='password'  placeholder='Enter password' {...register('password', {required: 'Password empty ', minLength: {value: 8, message:'Paaword can not be < 8'}, pattern:{value:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/, message:'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.'}})} />
            {errors.password && <p role='alert' className='text-red-200'>{errors.password.message}</p> }
            </div>
            <div>
            <input  className='w-full px-3 py-2 h-12 border border-[#f6f6f6f] rounded' type='password'  placeholder='Confirm password' {...register('confirmpass', {required:'Password empty ',  validate: (value)=> value === password || "The password do not match", })} />
            {errors.confirmpass && <span className='text-red-200'>{errors.confirmpass.message}</span>}
            </div>
            <div>
            <p><input type='checkbox'  {...register('agree', {required: 'Agree to terms and conditions to continue!!'})}/> Agree to terms and conditions</p>
            {errors.agree && <span className='text-red-200'>{errors.agree.message}</span>}
            </div>
            <button className='px-3 py-2 h-12 border bg-[#000] rounded text-white' type="submit">Create Account</button>
            

        </form>
        <p className="text-center"> Already have an account? <Link to='/login' className=" hover:no-underline ">Login</Link></p>
    </div>

</main>
  )
}

export default CreateAccount