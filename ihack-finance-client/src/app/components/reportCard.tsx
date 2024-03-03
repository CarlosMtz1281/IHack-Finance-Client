import React, { useState } from "react";
import "../style/components/reportCard.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  const total = data + lastData * 2;

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
      {isExpanded && (
        <div className="flex flex-col justify-center items-center">
          <div className="message">
            {recommendation}
          </div>
          <div className="progress-container">
            <ProgressBar style={{height: "20px", borderWidth: "2px"}}>
              <ProgressBar variant="blue" now={lastData/total * 100} label={lastData} key={1} />
              <ProgressBar variant="info" now={data/total * 100} label={data} key={2} />
              
            </ProgressBar>
          </div>

        </div>
        )}
    </div>
  );
};

export default ReportCard;
