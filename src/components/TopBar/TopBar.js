import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const TopBar = () => {
    return (
        <div className='d-flex justify-content-around justify-content-between align-items-center' style={{backgroundColor:'#DD3333'}}>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <p className='px-3'><PhoneIcon></PhoneIcon> Call us: +8801761596808</p>
                <p><EmailIcon></EmailIcon> Email: ict.computerstrainingcenter@gmail.com</p>
            </div>
            <div>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </div>
        </div>
    );
};

export default TopBar;