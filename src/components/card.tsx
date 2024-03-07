import React from "react";

const Card = ({props}:any, key:any) => {
    console.log(props)
  return (
    <div>
      <div className='card w-96 bg-primary shadow-xl mt-[100px] hover:scale-110 transition duration-[500ms] '>
        <div className='card-body'>
          <h2 className='card-title'>{props.tittle.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions  justify-around'>
            <button className='btn btn-neutral'>Edit</button>
            <button className='btn btn-secondary'>Delete</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
