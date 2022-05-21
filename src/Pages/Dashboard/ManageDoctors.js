import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const [deletingDoctor,setDeletingDocotor] =useState(null);
    const {data:doctors,isLoading,refetch}=useQuery('doctors',()=>fetch('https://pure-thicket-30912.herokuapp.com/doctor',{
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-6 mt-6'>Manage Doctors{doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th>serial</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
          doctors.map((doctor,index)=><DoctorRow
          key={doctor._id}
          doctor={doctor}
          index ={index}
          refetch={refetch}
          setDeletingDocotor={setDeletingDocotor}

          ></DoctorRow>)
      }
  
    </tbody>
  </table>
</div>
    {deletingDoctor && <DeleteConfirmModal
    
    deletingDoctor={deletingDoctor}
    refetch={refetch}
    setDeletingDocotor={setDeletingDocotor}

    ></DeleteConfirmModal>}        
</div>
    );
};

export default ManageDoctors;