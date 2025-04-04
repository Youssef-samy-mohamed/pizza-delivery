'use client'

import { useEffect, useState } from "react";

type Props = {
    price:number;
    id:number;
    options?: {title:string; additionalPrice:number}[]
}


const Price = ({price  , options } : Props) => {

const [total , setTotal] = useState(price)
const [qunatity, setQunatity] = useState(1);
const [selected, setSelectedl] = useState(0);



useEffect(() => {
  setTotal(
    qunatity * (options ? price + options[selected].additionalPrice : price)
  )
},[qunatity, selected , options , price])



  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* options container */}
      <div className=" flex gap-4">
        {options?.map((option, index) => (
          <button
            className=" min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background:selected === index ? "rgb(248 113 113) ": "white ",
              color:selected === index ? "white" : 'red'
            }}
            onClick={() => setSelectedl(index)}
            key={option.title}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* qunatity and add button container */}
      <div className="flex justify-between items-center ">
        {/* qunatity */}
        <div className=" flex justify-between w-full p-3 ring-1 ring-red-500 ">
          <span>Qunatity</span>
          <div className="flex gap-4 items-center">
            <button onClick={() => setQunatity(prev=> (prev > 1 ? prev-1 : 1))}>{"<"}</button>
            <span>{qunatity}</span>
            <button onClick={() => setQunatity(prev => (prev < 9 ? prev+1 : 9))}>{">"}</button>
          </div>
        </div>
        {/* cart button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Price