import React from 'react';

const Reveiw = ({reviews}) => {
    console.log(reviews);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit eum. Quibusdam odio quis obcaecati!</p>
          <div  class='flex items-center '>
          <div class="avatar mr-5">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={reviews.img} />
          </div>
          </div>
          <div>
              <h4 className='text-xl'>{reviews.name}</h4>
              <p>{reviews.location}</p>
          </div>
          
          </div>
        </div>
      </div>
    );
};

export default Reveiw;