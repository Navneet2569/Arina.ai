import React, { useEffect, useRef, useState } from "react";

interface StatItemProps {
  icon: string;
  end: number;
  title: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  end,
  title,
  description,
}) => {
  const [count, setCount] = useState(0);
  const [countingStarted, setCountingStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountingStarted(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (countingStarted) {
      let start = 0;
      const endValue = end;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / endValue));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= endValue) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [countingStarted, end]);

  return (
    <div ref={statsRef} className="col-lg-6">
      <div className="stats-item d-flex">
        <i className={`bi ${icon} flex-shrink-0`}></i>
        <div>
          <span className="purecounter">{count}</span>
          <p>
            <strong>{title}</strong> <span>{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
