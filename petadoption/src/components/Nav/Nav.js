import './Nav.scss';
import HomeIcon from '../../assets/home-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import MessageIcon from '../../assets/message-icon.svg';
import UserIcon from '../../assets/user-icon.svg';


function Nav() {

    return(

        <div className='nav'>

            <img src={HomeIcon} alt='home icon'></img>
            <img src={HeartIcon} alt='heart icon'></img>
            <img src={MessageIcon} alt='message icon'></img>
            <img src={UserIcon} alt='user icon'></img>

        </div>

    );
}

export default Nav;
