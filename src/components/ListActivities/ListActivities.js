import './ListActivities.css';
import React, {useState} from "react";
import ResultCard from "../ResultCard/ResultCard";

function ListActivities() {
    const [numberResults, setNumberOfResults] = useState(10);
    return (
        <div className='result-list'>
            {
                [...Array(numberResults)].map(result =>
                    <ResultCard/>)
            }
        </div>
    );
}

export default ListActivities;
