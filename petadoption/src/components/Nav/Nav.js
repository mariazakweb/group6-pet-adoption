import './Nav.scss';
import HomeIcon from '../../assets/home-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import MessageIcon from '../../assets/message-icon.svg';
import UserIcon from '../../assets/user-icon.svg';
import { Link } from 'react-router-dom';


function Nav() {

    return(

        <div className='nav'>

            <Link to="/">
                <img src={HomeIcon} className="homeIcon" alt='home icon'></img>
            </Link>
            <img src={HeartIcon} className="heartIcon" alt='heart icon'></img>
            <img src={MessageIcon} className="messageIcon" alt='message icon'></img>
            <img src={UserIcon} className="userIcon" alt='user icon'></img>

        </div>

    );
}

export default Nav;
