import React from 'react';

const InfoCard = ({img,cardTitle,bgclass}) => {
    return (
        <div class={`card lg:card-side  shadow-xl ${bgclass}`}>
  <figure className='pl-5 pt-2'>
      <img src={img}/>

      </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
    );
};

export default InfoCard;