import './UserInfo.scss';
import PinIcon from '../../assets/pin-icon.svg'
import UserImage from '../../assets/userimage.png'

function UserInfo() {

    return(

        <div className='UserInfo'>
            <img src={PinIcon} alt="pin-icon" className="pin-icon" />
            <div className="UserInfo__location-wrapper">
                <p className="UserInfo__location-tag">Your location</p>
                <p className="UserInfo__location">Toronto, Canada</p>
            </div>
            <img src={UserImage} alt="user image" className="userImage" />
        </div>

    );


}

export default UserInfo;
