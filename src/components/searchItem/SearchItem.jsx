import "./searchItem.css"
import Image13 from "../../assets/13.jpg"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img 
        src={Image13} 
        alt=""
        className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">The South Kensington</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Stay in the heart of London 
        </span>
        <span className="siFeatures">
          Entire studio &#8226; 1 bathroom &#8226; 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem