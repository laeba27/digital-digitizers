import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the countdown to 3 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 59, 59, 999);
  
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };
  
  return (
    <div className="flex justify-center lg:justify-start space-x-4">
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-xs uppercase text-slate-500 dark:text-slate-400">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-xs uppercase text-slate-500 dark:text-slate-400">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-xs uppercase text-slate-500 dark:text-slate-400">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-xs uppercase text-slate-500 dark:text-slate-400">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;