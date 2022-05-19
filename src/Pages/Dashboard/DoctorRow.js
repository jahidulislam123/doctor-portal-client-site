import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch}) => {
const {email}=doctor;
    const handleDelete=(email)=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
    
            }

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success(`Doctor :${doctor.name} is deleted`)
                refetch()
            }
        })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td> 
        <div class="avatar">
  <div class="w-8 rounded">
    <img src={doctor.img} alt={doctor.name} />
  </div>
</div>
        </td>
        <td>{doctor.name}</td>
        <td>{doctor.speciality}</td>
        <td><button onClick={()=>handleDelete(email)} class="btn btn-xs btn-error">delete</button></td>
      </tr>
     
    );
};

export default DoctorRow;