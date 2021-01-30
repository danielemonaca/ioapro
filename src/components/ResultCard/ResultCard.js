import './ResultCard.css';
import {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import ReportService from "../../firebase/report.service";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


function ResultCard() {
    const [name, setName] = useState("CallMeService");
    const [address, setAddress] = useState('Via Giamaica 11');
    const [openingTimes, setOpeningTimes] = useState('Orari: Lun-Ven 09:00 - 13:00')
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);


    const ReportType = {
        inappropriate: 'Contenuto Inappropriato',
        nonExistent: 'Questa attività non esiste',
        other: 'Altro'
    }

    const open = Boolean(anchorEl);

    const handleReportButtonClicked = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };


    const sendReport = (reportType) => {
        setAnchorEl(null);
        console.log('ciao')
        /* TO DELETE EVERYTHING ReportService.deleteAll().then(r => console.log('everything got deleted.'));*/
        ReportService.newReport({
            businessId: 2,
            reportMessage: reportType
        });

        /* if (reportType) {
             try {
                 ReportService.newReport({
                     businessId: 1,
                     reportMessage: reportType
                 }).then(result => {
                     setOpenSnackbar(true);
                 }).catch(error => {
                     setError(true);
                 })
             } catch (error) {
                 setError(true);
             }
         }*/
    }

    return (
        <div className='card '>
            <span className='name block'>{name}</span>
            <span className='address block'>{address}</span>
            <span className='times block'>{openingTimes}</span>
            <div className='report-button'>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleReportButtonClicked}
                >
                    <ErrorOutlineIcon/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={() => sendReport(null)}
                >
                    <MenuItem onClick={() => sendReport(ReportType.inappropriate)}>ReportType.inappropriate</MenuItem>
                    <MenuItem onClick={() => sendReport(ReportType.nonExistent)}>ReportType.nonExistent</MenuItem>
                    <MenuItem onClick={() => sendReport(ReportType.other)}>ReportType.other</MenuItem>
                </Menu>
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error">
                        This is an error message!
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default ResultCard;
