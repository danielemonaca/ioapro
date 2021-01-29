import React, {useCallback} from "react";
import './TopBar.css';
import {BsFillPlusCircleFill} from "react-icons/bs";
import {useHistory} from "react-router-dom";

function TopBar() {

    const history = useHistory();
    const handleOnAddActivityClick = useCallback(() => history.push('/add-business'), [history]);
    const handleOnLogoClick = useCallback(() => history.push('/'), [history]);

    return (
        <div className="container">
            <h1 className='logo logo-responsive pointer shadow' onClick={handleOnLogoClick}>RestoAperto_</h1>
            <div className='container-add-activity pointer shadow-hover' onClick={handleOnAddActivityClick}>
                <p>Aggiungi attività</p>
                <BsFillPlusCircleFill/>
            </div>
        </div>
    );
}

export default TopBar;
