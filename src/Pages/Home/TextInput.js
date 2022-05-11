import React from 'react';
import inputBack from '../../assets/images/appointment.png'
import PrimaryButton from './Shared/PrimaryButton';

const TextInput = () => {
    return (
        <div className='flex rounded-lg flex-col justify-center items-center py-8 ' style={{
            background:`url(${inputBack})`
        }}>
            
<h2 className='font-bold text-2xl text-primary'>Contack Us</h2>
<h3 className='text-white mb-2 text-2xl '>Stay Connected With Us</h3>
<input type="text" placeholder="Email" class="input input-bordered input-sm w-full mb-2 max-w-xs" />

<input type="text" placeholder="Subject" class="input input-bordered input-md w-full mb-2 max-w-xs" />

<textarea type="text" placeholder="Your Message" class="input input-bordered input-lg w-full mb-2 max-w-xs" />
<PrimaryButton >Submit</PrimaryButton>
        </div>
    );
};

export default TextInput;