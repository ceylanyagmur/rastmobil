import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { AiOutlineInstagram,AiOutlineTwitter,AiOutlineUserAdd,AiOutlineIe} from "react-icons/ai";
import './Navbar.css'
import logo from "./img/logo.jpg"
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)



  return (
    <div>
   
    <nav className='navbar'>
    
    <Link className="logo" to="/"><img src={logo}/></Link>
    <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
   
        <Link  to="/"  className="home"> <li>Hakkımızda</li></Link>
        
        
        <Link to="/JüriYarışmaYazılımı" className= "JüriYarışmaYazılım" ><li>Jüri-Yarışma-Yazılımı </li></Link>
        <Link to="/WordNinja" className= "WordNinja" ><li>Word Ninja </li></Link>
        <Link to="/WordPyramids" className= "WordPyramids" ><li>Word Pyramids</li></Link>
       
       
    </ul> 
    <div className='icon'>
    <AiOutlineInstagram /><AiOutlineTwitter /><AiOutlineUserAdd /><AiOutlineIe />
    </div>
    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
  </nav>
 

  </div>
   
   
  )
}
export default Navbar;