import './MainDashboard.css';
import {useState} from "react";
import Map from "../Map/Map";
import ListActivities from "../ListActivities/ListActivities";

function MainDashboard() {
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        event.persist();
        setSearch(event.target.value)
    }

    return (
        <div className="grid-container">
            <div className="text-map">
                <div>
                    <input type="text" name="nome" placeholder="Cerca per un'attività..." onChange={handleInputChange} value={search}/>
                    <Map/>
                </div>
            </div>
            {search.length ? <ListActivities/> :
                <div className='text-container'>
                    <h1>Io resto aperto</h1>
                    <p>Servizio gratuito e open source per la ricerca di
                        attività aperte nella propria zona.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare elit quis purus iaculis
                        consectetur. Suspendisse vitae sapien consectetur, pretium diam ac, aliquam elit. Duis et eros
                        mi. Suspendisse porttitor molestie quam maximus ullamcorper. Praesent efficitur nisl lacus, eu
                        accumsan sem accumsan eget. Vestibulum ante i
                    </p>
                </div>}
        </div>
);
}

export default MainDashboard;
