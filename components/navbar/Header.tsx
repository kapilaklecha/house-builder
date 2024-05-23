'use client'
import  { useState } from "react";
import Link from "next/link";
import Container from "../Container";
import Button from "../Button";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setShow(!show);
  };
  
  return (
    <nav className=" h-fit py-2 ">
      <Container>
        <div className=" h-[100%] flex items-center justify-between ">
        <Link href='/' className=" group font-extrabold text-4xl text-white bg-logo p-3 rounded-md hover:bg-white  max-lg:hidden">
         <span className=" group-hover:text-[#2a2b]">Let</span><span className=" group-hover:text-primary">:</span><span className=" group-hover:text-[#2a2b]">Us</span>
        </Link>
       <div className="flex items-center max-lg:hidden" >
        <NavLink routpath="/" name="Home" />
        <NavLink routpath="/services" name="Services"/>
        <NavLink routpath="/work" name="Work" />
        <NavLink routpath="/about" name="About" />
        <div className=" ml-5">

        <Button path="/contact" text="Start your project" className={' p-2   bg-white border font-medium text-xl text-primary hover:bg-primary hover:text-white  '}/>
        </div>
         
       </div>
      
        </div>
       
      </Container>
      <div className=" lg:hidden">
      <div className=" px-2 w-[100%]  flex justify-between items-center "> 
     <Link href='/' className=" group font-extrabold text-4xl text-white bg-logo p-3 rounded-md hover:bg-white lg:hidden h-[64px]" >
         <span className=" group-hover:text-[#2a2b]">Let</span><span className=" group-hover:text-primary">:</span><span className=" group-hover:text-[#2a2b]">Us</span>
        </Link>
      <div className=" lg:hidden max-lg:block"><button onClick={toggleMenu}>{show ? <CloseIcon/> :  <MenuIcon/>}</button></div>
      </div>
      {show && <div className=" flex flex-col justify-center items-center">
      <NavLink routpath="/" name="Home" />
        <NavLink routpath="/services" name="Services"/>
        <NavLink routpath="/work" name="Work" />
        <NavLink routpath="/about" name="About" />
        <div className=" ml-5">

        <Button path="/contact" text="Start your project" className={' p-2   bg-white border font-medium text-xl text-primary hover:bg-primary hover:text-white  '}/>
        </div>
        
      </div>}
      </div>
    </nav>
  );
};

export default Header;


const NavLink = ({routpath , name} : {routpath : string, name : string}) => {
    return (
      <Link href ={routpath} className=" text-primary text-xl font-medium p-2 mr-[20px] hover:text-[#4a4a4a]">
        {name}
      </Link>
    )
}