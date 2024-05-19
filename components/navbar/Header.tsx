import React from "react";
import Link from "next/link";
import Container from "../Container";
import Button from "../Button";

const Header = () => {
  return (
    <nav className=" h-[100px] ">
      <Container>
        <div className=" h-[100%] flex items-center justify-between ">
        <Link href='/' className=" group font-extrabold text-4xl text-white bg-logo p-3 rounded-md hover:bg-white ">
         <span className=" group-hover:text-[#2a2b]">Let</span><span className=" group-hover:text-primary">:</span><span className=" group-hover:text-[#2a2b]">Us</span>
        </Link>
       <div className="flex items-center" >
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