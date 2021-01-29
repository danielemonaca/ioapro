import './AddActivity.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import AvailableTimes from 'react-available-times';


function AddActivity() {

    const [values, setValues] = useState({
        nameActivity: '',
        category: '',
        address: '',
        openingTimes: {
            monday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
            tuesday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
            wednesday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
            thursday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
            friday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
            saturday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
            sunday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'}
        }

    })

    const [submitted, setSubmitted] = useState(false);

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            nameActivity: event.target.value,
        }));
    }

    const handleCategoryInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            category: event.target.value,
        }));
    }

    const handleAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
    }

    const handleWeekDayCheckboxChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setValues({
            nameActivity: '',
            category: '',
            address: '',
            openingTimes: {
                monday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
                tuesday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
                wednesday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
                thursday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
                friday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
                saturday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'},
                sunday: {isOpen: false, openingTime: '00:00', closingTime: '00:00'}
            }
        })
    };

    return (
        <>
            <div className='add-activity'>
                <h1>Aggiungi un'attività</h1>
                <form className='register-form' onSubmit={handleSubmit}>
                    <div className="text-field">
                        <label>Nome<strong>*</strong></label>
                        <input type="text" name="nome" placeholder="Inserisci il nome dell'attività..."
                               onChange={handleNameInputChange}
                               value={values.nameActivity} required/>
                    </div>
                    <div className="text-field">
                        <label>Categoria</label>
                        <input type="text" name="categoria" placeholder="Inserisci il categoria dell'attività..."
                               onChange={handleCategoryInputChange} value={values.category}/>
                    </div>
                    <div className="text-field">

                        <label>Indirizzo...sii specifico!<strong>*</strong></label>
                        <input type="text" name="indirizzo" placeholder="Ex: Via Mario Rossi, 00100, Roma"
                               onChange={handleAddressInputChange} value={values.address} required/>
                    </div>
                    <h3>Orari di apertura</h3>
                    <AvailableTimes
                        weekStartsOn="monday"
                        onChange={(selections) => {
                            selections.forEach(({start, end}) => {
                                console.log('Start:', start, 'End:', end);
                            })
                        }}
                        height={600}
                        recurring={true}
                        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                        availableHourRange={{start: 0, end: 24}}
                    />


                    <div className='submit-button'>
                        <input type="submit" value="Registra"/>
                    </div>
                </form>
                {submitted && <div className='success-message'>Attività aggiunta con successo! Vai sulla <Link to='/'>pagina
                    principale</Link> per trovarla</div>}
            </div>
        </>
    );
}

export default AddActivity;
