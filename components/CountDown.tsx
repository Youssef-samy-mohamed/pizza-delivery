'use client'
import Countdown from "react-countdown"


const endingDate = new Date("2025-09-18")

const CountDown = () => {
  return (
    <div>
      <Countdown className="font-bold text-5xl text-yellow-400" date={endingDate} />
    </div>
  );
}

export default CountDown