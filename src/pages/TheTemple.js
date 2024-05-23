import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Social from '../components/social-icon/Social'
import templeComplex from "../assets/images/templeComple.webp";
import templeComplex2 from "../assets/images/templeComple.jpeg";
import TempleCard from '../components/TempleCard';

const TheTemple = () => {

    const cardData = [
        { image: "assets/images/Gurusthan.png", text: "Lendi Garden" },
        { image: "assets/images/Gurusthan.png", text: "Another Place" },
        // Add more objects as needed
    ];
    return (
        <>
            <Navbar />
            <Social />

            <div
                className="about-background"
                style={{ backgroundImage: `url(${templeComplex})` }}
            ></div>
            <div>
                <marquee behavior="" direction="">
                    🚩
                    <span className="about-marquee">
                        Shri Saibaba Sansthan Trust, Shirdi
                    </span>
                    🚩
                </marquee>
                <div className="about-path">
                    <span> Home &#9654; Sai Temple &#9654; The Temple</span>
                </div>
                <div className="adhok-head">
                    <h1>Temple Complex</h1>
                </div>
            </div>

            <div className='temple-information'>
                <div className='information'>
                    <div className='info'>
                        <p>
                            The temple premises of Shri Saibaba is spread in approximately 200 sq. mtrs. It is situated in the heart of Shirdi village and is a major center of pilgrims from all over the world.
                        </p>
                        <p>
                            On an average, daily 25,000 devotees visit Shirdi village, to have the Darshan of Shri Saibaba. In the festival season, more than 1,00,000 devotees visit the Temple everyday. The Temple premises is renovated in the year 1998-99 and now is equipped with all necessary facilities like Darshan Lane, Prasadalay (Lunch and Dinner), Donation Counters, Prasad Counters, Canteen, Railway Reservation Counter, Book Stall etc. The accommodation facilities are also provided by the Sansthan.
                        </p>

                    </div>
                    <div className='info-img'>

                        <img src={templeComplex2}/>

                    </div>

                    <div>
                    </div>
                </div>
                <div className="container-premises">
      {cardData.map((data, index) => (
        <TempleCard key={index} image={data.image} text={data.text} />
      ))}
    </div>

            </div>  
            <Footer />


        </>
    )
}

export default TheTemple
