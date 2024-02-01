import { Link } from "react-router-dom"


function Login() {
  return (
    <main className='w-screen  h-screen bg-gray-50 flex justify-center items-center'>
        <div className="login-form w-1/3 bg-white rounded shadow-lg p-4 flex flex-col gap-8 md:p-8">
            <h1 className="text-lg text-black text-center">Welcome Back!</h1>
            <form  className='flex flex-col gap-4'>
                <input className='px-3 py-2 h-12 border border-[#f6f6f6f] rounded' type='email' placeholder='Enter email' />
                <input  className='px-3 py-2 h-12 border border-[#f6f6f6f] rounded' type='password' placeholder='Enter password' />
                <button className='px-3 py-2 h-12 border bg-[#000] rounded text-white' type="submit">Login</button>
                

            </form>
            <p className="text-center"> Dont have an account? <Link to='/create-account' className=" hover:no-underline ">Create account</Link></p>
        </div>

    </main>
  )
}

export default Login