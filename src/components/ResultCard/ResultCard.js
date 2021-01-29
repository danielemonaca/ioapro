import './ResultCard.css';
import {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";


function ResultCard() {
    const [name, setName] = useState("CallMeService");
    const [address, setAddress] = useState('Via Giamaica 11');
    const [openingTimes, setOpeningTimes] = useState('Orari: Lun-Ven 09:00 - 13:00')


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    onClick={handleClick}
                >
                    <ErrorOutlineIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default ResultCard;
