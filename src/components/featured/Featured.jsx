import "./featured.css"
import Image1 from "../../assets/1.jpg"
import Image2 from "../../assets/2.jpg"
import Image3 from "../../assets/3.jpg"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img 
          src={Image1} alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>26 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src={Image2} alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>32 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src={Image3} alt=""
          className="featuredImg" 
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>20 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured