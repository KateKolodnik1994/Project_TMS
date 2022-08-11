import {
    BurgerMenu,
    // Search,
    UserInfo
} from "./components";
import { GlobalSvgSelector } from '../../assets/images/icons/iconsSvgSelector';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                   <GlobalSvgSelector id="header-logo" />
                </div>
                <div className="title">Weather APP</div>
            </div>
            <div className="wrapper">
                {/* <Search /> */}
            </div>
        </header>
    )
};

export default Header;
