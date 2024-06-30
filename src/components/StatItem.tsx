import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

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
  const countUpRef = useRef<CountUp>(null);

  useEffect(() => {
    if (countUpRef.current && end > 0) {
      countUpRef.current.start();
    }
  }, [end]);

  return (
    <div className="col-lg-6">
      <div className="stats-item d-flex">
        <i className={`bi ${icon} flex-shrink-0`}></i>
        <div>
          <CountUp
            ref={countUpRef}
            start={0}
            end={end}
            duration={2}
            className="purecounter"
          />
          <p>
            <strong>{title}</strong> <span>{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
