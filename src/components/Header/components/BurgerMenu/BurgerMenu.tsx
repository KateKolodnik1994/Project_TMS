import { useState } from 'react';
import './BurgerMenu.css';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const BurgerMenu = ({changes}:any) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
        <div onClick={handleClick} className='burger-menu'>
            <LunchDiningIcon />
        </div>
        <div style={{display: `${show || changes ? 'block' : 'none'}`}}>PopUp</div>
        </>
    )
};

export default BurgerMenu;