import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import Image14 from "../../assets/14.jpg"
import Image15 from "../../assets/15.jpg"
import Image16 from "../../assets/16.jpg"
import Image17 from "../../assets/17.jpg"
import Image18 from "../../assets/18.jpg"
import Image19 from "../../assets/19.jpg"


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: Image14
    },
    {
      src: Image15
    },
    {
      src: Image16
    },
    {
      src: Image17
    },
    {
      src: Image18
    },
    {
      src: Image19
    }
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction ==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && ( 
          <div className="slider">
            <FontAwesomeIcon 
              icon={faCircleXmark} className="close" 
              onClick={() => setOpen(false)} 
            />
            <FontAwesomeIcon 
              icon={faCircleArrowLeft} className="arrow_left" 
              onClick={() => handleMove("l")} 
            />
            <div className="sliderWrapper">
              <img 
                src={photos[slideNumber].src} 
                alt=""
                className="sliderImg" 
              />
            </div>
            <FontAwesomeIcon 
              icon={faCircleArrowRight} className="arrow_right" 
              onClick={() => handleMove("r")} 
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon 
              icon={faLocationDot}
            />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location &#8211; 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)} 
                  src={photo.src} 
                  alt=""
                  className="hotelImg" 
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Experience World-class Service</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus tortor at turpis suscipit suscipit. Pellentesque sit amet dictum leo. Nulla facilisi. Fusce sagittis, arcu ut venenatis cursus, mi nunc luctus eros, vitae aliquam lacus dui et magna. Pellentesque blandit urna magna, non accumsan magna porttitor nec. Nullam fermentum ligula in tempus rhoncus. Donec ac sapien eu mauris posuere ultricies ac nec magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.                      
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 2-night stay! </h1>
              <span>
                Located in the real heart of London,
                this property has an excellent 
                location score of 8.9!
              </span>
              <h2>
                <b>$300</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel