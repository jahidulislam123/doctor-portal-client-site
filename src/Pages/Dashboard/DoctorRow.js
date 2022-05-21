import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch,setDeletingDocotor}) => {
const {email}=doctor;
   
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
        <td>
        <label onClick={()=>setDeletingDocotor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            
            </td>
      </tr>
     
    );
};

export default DoctorRow;