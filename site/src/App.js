import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import BG from './images/background.jpg'

const App = () => {
    return (
        <div className='home-main'>
            <Header/>


                <div className='image' style={{backgroundImage: `url('${BG}')`}}>
                    <div className='home-content'>
                        <div className='heading-text'>
                            <h1>Welcome to</h1>
                            <h1 className='special-font'>Power Company!</h1>
                        </div>
                        <h4>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </h4>
                    </div>
                </div>


            <Footer/>
        </div>
    );
}

export default App;