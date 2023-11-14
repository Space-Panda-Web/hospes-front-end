import "./navbar.css"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img src={Logo} alt="" className="logo_img" />
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar