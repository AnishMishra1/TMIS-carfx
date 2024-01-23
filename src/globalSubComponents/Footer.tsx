// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import Footerhelper from "./Footerhelper";

const Products =[
  "Used Cars for Sale",
  "CARFX Car Care",
  "CARFX Value",
  "CARFX Reports",
  "Sell My Car"
]

const Reasource =[
  "Car Research",
  "Recalls",
  "Find a Dealer",
  "Find a Service Shop",
  "Sample Report"
]

const AboutUs = [
  "About CARFX",
  "Blog",
  "Press Room",
  "Careers",
  
]

const contact =[
  "Customer Support",
  "Dealer Support",
  
]

    
  

const Footer = () => {
  return (
    <div>
      <div className=" lg:h-[25rem] md:[50rem] sm:h-[80rem] flex flex-col  items-center justify-between bg-black text-white p-20">
        {/* All Footer logo */}
        <div className="flex flex-row items-start justify-between gap-5 p-5">
          <div className="text-2xl">
            <SiFacebook/>
          </div >
          <div className="text-2xl">
            <TbBrandYoutubeFilled/>
          </div>
          <div className="text-2xl">
            <FaPhone/>
          </div>
          <div className="text-2xl">
            <FaSquareXTwitter/>
          </div>
        </div>
        

        {/* All footer information */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:gap-10 gap-3">
        <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">Our Products</h1>
            </div>
            
            <div className="mt-4 ">            
            {Products.map((e,i) => (<Footerhelper key={i} des={e} />))}
            </div>
          </div>
          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">Reasource</h1>
            </div>
            
            <div className="mt-4 ">            
            {Reasource.map((e,i) => (<Footerhelper key={i} des={e} />))}
            </div>
          </div>
          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">About Us</h1>
            </div>
            
            <div className="mt-4 ">            
            {AboutUs.map((e,i) => (<Footerhelper key={i} des={e} />))}
            </div>
          </div>
          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">Contact Us</h1>
            </div>
            
            <div className="mt-4 ">            
            {contact.map((e,i) => (<Footerhelper key={i} des={e} />))}
            </div>
          </div>        
        </div>
      </div>

      <div className="h-[5rem] bg-yellow-500 text-black-400 text-small md:text-large font-extralight flex flex-col items-center justify-center px-[2rem] ">
        Copyright 2019 All Right Reserved By Free html Templates Distributed By TMIS
      </div>
    </div>
  );
};

export default Footer;
