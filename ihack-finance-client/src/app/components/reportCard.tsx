import React, { use, useEffect, useState } from "react";
import "../style/components/reportCard.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface ReportCardProps {
  category: string;
  data: number;
  lastData: number;
  recommendation: string;
}

const ReportCard: React.FC<ReportCardProps> = ({
  category,
  data,
  lastData,
  recommendation,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleClick}
    >
      <div className="header">
        <div className="headerLeft">
          <h2 className="categoryName">{category}</h2>
        </div>
        <div className="headerRight">
          {isExpanded ? (
            <IoIosArrowDown size={25} />
          ) : (
            <IoIosArrowForward size={25} />
          )}
        </div>
      </div>
      {isExpanded && <div className="message">{data} and {lastData}</div>}
    </div>
  );
};

export default ReportCard;
