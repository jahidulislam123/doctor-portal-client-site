import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Shared/Loading';
import { Link ,useLocation,useNavigate} from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate =useNavigate();
    const location =useLocation();

    // eta normally dicilam kintu ami warning katte giye stack overflow the eta useEffect er vitor theke niye asci 
    useEffect(()=>{
      if(user||gUser){
        // console.log(user||gUser);
        navigate (from,{replace:true})
       
    }
    },[user,gUser,navigate])
    let from =location.state?.from?.pathname || "/";
    let signInErrorMessage ;
    if(error||gError){
      signInErrorMessage =<p className='text-red-500'><small>{error?.message||gError?.message}</small></p>
    }
    if(loading|| gLoading){
      return <Loading></Loading>

    }
   
   


    const onSubmit = data => {
      console.log(data);
      signInWithEmailAndPassword(data.email,data.password)

    }
    return (
        <div className='flex h-screen justify-center items-center'>
           <div className="card w-96 bg-base-100 shadow-xl">
           <div className="card-body">
           <h2 className="text-center text-2xl font-bold">Login</h2>
          
           <form onSubmit={handleSubmit(onSubmit)}>

           <div className="form-control w-full max-w-xs">
                 <label className="label">
                  <span className="label-text">Email</span>
    
             </label>
             <input
              type="email"
               placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email",  {
                    required:{
                      value:true,
                      message : 'Email is Required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+[a-z]{2,3}/,
                      message: 'Provide a valid valid'
                    }
                  })}
                />
             <label className="label">
             {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
               </label>
            </div>
           <div className="form-control w-full max-w-xs">
                 <label className="label">
                  <span className="label-text">Password</span>
    
             </label>
             <input
              type="password"
               placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password",  {
                    required:{
                      value:true,
                      message : 'password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 character or longer'
                    }
                  })}
                />
             <label className="label">
             {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
               </label>
            </div>



           {signInErrorMessage}
           <input className='btn w-full max-w-xs' type="submit"  value='Login'/>
            </form>
            <p><small>New to doctors portal <Link className='text-primary' to='/singUp'>create new account</Link></small></p>

           <div className="divider">OR</div>
           <button
            onClick={()=>signInWithGoogle()} 
           className="btn  btn-outline">Continue With Google</button>
    </div>
  </div>
</div>
       
    );
};

export default Login;