import React from "react";

interface CountupProps {
  end: number;
  duration: number;
}

const interval = 16.66;
const step = 1;

const Countup = ({ end, duration }: CountupProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let now = 0;
    const updateCount = Math.ceil(duration / interval);

    const countUp = setInterval(() => {
      now += step;
      const percentage = (now / updateCount) * (2 - now / updateCount); // ease out
      setCount(end * percentage);

      if (now === updateCount) {
        clearInterval(countUp);
      }
    }, interval);
  }, [duration, end]);

  return <span ref={ref}>{count.toFixed(0)}</span>;
};

export default Countup;
