import './UserInfo.css';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
const UserInfo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }
    
    return (
        <div className='user-info' onClick={handleClick}>
            <PersonIcon />
        </div>
    )
};

export default UserInfo;