import "./propertyList.css"
import Image4 from "../../assets/4.jpg"
import Image5 from "../../assets/5.jpg"
import Image6 from "../../assets/6.jpg"
import Image7 from "../../assets/7.jpg"
import Image8 from "../../assets/8.jpg"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img 
          src={Image4} 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>56 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src={Image5} 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>24 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src={Image6} 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>46 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src={Image7} 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>30 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src={Image8} 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>21 cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList