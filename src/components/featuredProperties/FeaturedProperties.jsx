import "./featuredProperties.css"
import Image9 from "../../assets/9.jpg"
import Image10 from "../../assets/10.jpg"
import Image11 from "../../assets/11.jpg"
import Image12 from "../../assets/12.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img 
          src={Image9} 
          alt="" 
          className="fpImg"
          />
        <span className="fpName">Hotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img 
          src={Image10} 
          alt="" 
          className="fpImg"
          />
        <span className="fpName">Maritim Arte Hotel</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img 
          src={Image11} 
          alt="" 
          className="fpImg"
          />
        <span className="fpName">Ibis Hotel Paris</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img 
          src={Image12} 
          alt="" 
          className="fpImg"
          />
        <span className="fpName">Aparthotel Hampton</span>
        <span className="fpCity">Rome</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties