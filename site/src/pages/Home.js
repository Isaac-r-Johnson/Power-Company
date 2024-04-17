import React from 'react'
import BG from '../images/background.jpg';


const Home = () => {
    return (
        <div className='home-main'>
            <div className='image' style={{backgroundImage: `url('${BG}')`}}>
                <div className='home-content'>
                    <div className='heading-text'>
                        <h1>Welcome to</h1>
                        <h1 className='special-font'>Power Company!</h1>
                    </div>
                    <h4>
                        Power Company is a beacon of Christ-centered fellowship, where students gather to encounter Jesus, strengthen their faith, and experience the joy of Christian community. Through worship, prayer, teaching, and meaningful relationships, young hearts are nurtured, encouraged, and empowered to grow in their walk with the Lord. We invite you to join us on Sunday nights from 6:00pm to 7:30pm as we come together to worship, learn, and fellowship in the presence of our Savior.
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Home;