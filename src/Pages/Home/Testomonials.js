import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reveiw from './Reveiw';


const Testomonials = () => {
    const reviews =[
        {
            _id:1,
            name:"winson herry",
            review:'A',
            location:"califormia",
            img:people1
        },
        {
            _id:2,
            name:"winson herry",
            review:'S',
            location:"califormia",
            img:people2
        },
        {
            _id:3,
            name:"winson herry",
            review:'D',
            location:"califormia",
            img:people3
        }
    ];
    return (
        <section className='mt-8 my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl '>What our patients say</h2>
                </div>
                <div className='w-50'>
                    <img className='w-24 lg:w-40' src={quote} alt="" />

                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                  reviews.map(review=><Reveiw
                  
                  key={review._id}
                  reviews={review}
                  
                  ></Reveiw>)
              }
            </div>
            
        </section>
    );
};

export default Testomonials;