import './Services.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon={faCode} className="icon" /> */}


export default function Services() {
  return (
  <>
  <h1 className='text-center f-1'>Our <span style={{color:'#008cff'}}>Services ?</span></h1>
  <div className="container ">

    <div className="father">
    <div className="f_card">
      <div className="facode">
      <FontAwesomeIcon icon={faCode} className="fa_code text-center fs-1" />
      </div>
      <h2 className='text-center'>Web Development</h2>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum atque qui enim voluptates consectetur dicta suscipit asperiores possimus sequi labore et, est illo inventore perferendis architecto obcaecati nesciunt eius debitis, voluptatem assumenda tempore provident! Unde magni molestias facilis labore.</p>
      
      <div className="text-center">
            <button type="submit" className='send_massage'>Read More</button>
          </div>
    </div>
    <div className="f_card">
      <div className="facode">
      <FontAwesomeIcon icon={faCode} className="fa_code text-center fs-1" />
      </div>
      <h2 className='text-center'>Web Development</h2>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum atque qui enim voluptates consectetur dicta suscipit asperiores possimus sequi labore et, est illo inventore perferendis architecto obcaecati nesciunt eius debitis, voluptatem assumenda tempore provident! Unde magni molestias facilis labore.</p>
      
      <div className="text-center">
            <button type="submit" className='send_massage'>Read More</button>
          </div>
    </div>
    <div className="f_card">
      <div className="facode">
      <FontAwesomeIcon icon={faCode} className="fa_code text-center fs-1" />
      </div>
      <h2 className='text-center'>Web Development</h2>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum atque qui enim voluptates consectetur dicta suscipit asperiores possimus sequi labore et, est illo inventore perferendis architecto obcaecati nesciunt eius debitis, voluptatem assumenda tempore provident! Unde magni molestias facilis labore.</p>
      
      <div className="text-center">
            <button type="submit" className='send_massage'>Read More</button>
          </div>
    </div>
    <div className="f_card">
      <div className="facode">
      <FontAwesomeIcon icon={faCode} className="fa_code text-center fs-1" />
      </div>
      <h2 className='text-center'>Web Development</h2>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum atque qui enim voluptates consectetur dicta suscipit asperiores possimus sequi labore et, est illo inventore perferendis architecto obcaecati nesciunt eius debitis, voluptatem assumenda tempore provident! Unde magni molestias facilis labore.</p>
      
      <div className="text-center">
            <button type="submit" className='send_massage'>Read More</button>
          </div>
    </div>

    </div>

  </div>
  
  </>
  );
}
