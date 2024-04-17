import React from 'react'
import image from '../images/PowerCompanyBlackLogo2.jpg';
import missionIcon from '../images/mission.png';
import visionIcon from '../images/vision.png';
import goalsIcon from '../images/goals.png';

const Mission = () => {
    return (
        <div className='mission-main'>

            <div className='left'>
                <h1>Our Mission</h1>

                <div className='list'>

                    <div className='list-item'>
                        <img className='icon' src={missionIcon} alt={"Icon"}/>
                        <div className='list-text'>
                            <h2>Mission</h2>
                            <h5>Lorem Ipsum is simply dummy text</h5>
                        </div>
                    </div>

                    <div className='list-item'>
                        <img className='icon' src={visionIcon} alt={"Icon"}/>
                        <div className='list-text'>
                            <h2>Vision</h2>
                            <h5>Lorem Ipsum is simply dummy text</h5>
                        </div>
                    </div>

                    <div className='list-item'>
                        <img className='icon' style={{borderRadius: '0'}} src={goalsIcon} alt={"Icon"}/>
                        <div className='list-text'>
                            <h2>Goals</h2>
                            <h5>Lorem Ipsum is simply dummy text</h5>
                        </div>
                    </div>

                </div>

            </div>

            <div className='right'>
                <div className='circle'>
                    <img className='mission-image' src={image} alt='Youth Group'/>
                </div>
            </div>

        </div>
    );
}

export default Mission;