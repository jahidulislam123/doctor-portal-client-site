import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Home/Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const {data:services,isLoading}=useQuery('services',()=>fetch('https://pure-thicket-30912.herokuapp.com/services').then(res=>res.json()));

    const imageStorageKey ='a175c2702bd336e98e64264cd0e92d8f';

    /**
     * 1:3 ways to store images
     * 1: THIRD party storage //free open public storage is okay for practice projects
     *  
     * 2: your own storage in your own server (file system )
     * 3: in my database in mongodb
     * 3: database mongodb
     * 4: YUP: to validate file : search yup file validation for react file validation 
    */
    const onSubmit = async(data) => {
      const formData = new FormData();
      const image =data.image[0];
      formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
          method:'POST',
          body:formData

        })
        .then(res=>res.json())
        .then(result =>{
          if(result.success){
            const img =result.data.url;
           
            const doctor ={
              name: data.name,
              email :data.email,
              speciality : data.speciality,
              img:img


            }
            //send to your database 
            fetch('https://pure-thicket-30912.herokuapp.com/doctor',{
              method:'POST',
              headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(inserted=>{
            if(inserted.insertedId){
              toast.success('Doctor added Successfully');
              reset();

            }
            else{
              toast.error('Failded to add data doctor');
            }
            })

          }
          
        })

        
          // console.log('data',data);
          // navigate('/appoinment')
  
      }
      if(isLoading){
          return <Loading></Loading>
      }


    return (
        <div>
            <h2 className='text-2xl '>Add a new Doctors</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
      <label className="label">
       <span className="label-text">Name</span>

  </label>
  <input
   type="text"
    placeholder="Your Name"
     className="input input-bordered w-full max-w-xs"
     {...register("name",  {
         required:{
           value:true,
           message : 'Name is Required'
         }
       })}
     />
  <label className="label">
  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
 </div>
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
       <span className="label-text">Speciality</span>

  </label>

  <select {...register('speciality')} class="select input-bordered w-full max-w-xs">
  {
      services.map(service=><option
      key={service._id}
      value={service.name}
      >{service.name}</option>)
  }
 
    </select>
 </div>

 <div className="form-control w-full max-w-xs">
      <label className="label">
       <span className="label-text">Photo</span>

  </label>
  <input
   type="file"
     className="input input-bordered w-full max-w-xs"
     {...register("image",  {
         required:{
           value:true,
           message : 'image is Required'
         }
       })}
     />
  <label className="label">
  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
 </div>


<input className='btn w-full max-w-xs' type="submit"  value='Add'/>
 </form>
            
        </div>
    );
};

export default AddDoctor;