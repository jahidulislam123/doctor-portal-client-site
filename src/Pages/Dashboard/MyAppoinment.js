import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyAppoinment = () => {
    const navigate =useNavigate();
    const [user]=useAuthState(auth);
    const [appoinments,setAppoinment]=useState([]);
    useEffect(()=>{
       if(user){
        fetch(`https://pure-thicket-30912.herokuapp.com/booking?patient=${user.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            console.log('res',res)
            if(res.status===401 || res.status===403){
              signOut(auth);
              localStorage.removeItem('accessToken')
              navigate('/');
            }
           return res.json()})
        .then(data=>{

            setAppoinment(data)})
       }
    },[user])
    return (
        <div>
            <h3>my appoinment : {appoinments.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            appoinments.map((a ,index)=><tr>  
                <th>{index+1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                  {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                  </td>
      </tr>
      )
        }
      
        
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;