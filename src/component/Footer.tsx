import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoReload, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLocationOutline} from "react-icons/io5";
import qrcode from '../qrcode.png'
import kbzpay from '../kbzpay.png';
import wave from '../wave.jpeg'
import { FaTelegram, FaViber } from "react-icons/fa6";
import {CiPhone} from "react-icons/ci"
const Footer = () => {
  return (
    <>
        <div className='my-10 max-sm:grid-cols-2 max-sm:grid-rows-12 grid-flow-col max-sm:h-[28rem] h-60 gap-5 grid grid-cols-4 grid-rows-5'>
            <div className='text-sm row-span-3 max-sm:row-span-3'>
              <h1 className="text-lg">Customer Service</h1>
                <p className="my-3 flex items-center gap-2"><MdOutlinePrivacyTip/> Terms & Privacy Policy</p>
                <p className="flex items-center gap-2"><IoReload/> Return Policy</p>
            </div>
            <div className='row-span-2 max-sm:row-span-3'>
            <h1 className="text-lg mb-3">Payment</h1>
            <img className="w-1/4 mr-2 rounded-md h-1/2 inline" src={kbzpay} alt="" />
            <img className="w-1/4 h-1/2 rounded-md inline" src={wave} alt="" />
            </div>
            <div className='row-span-3 max-sm:row-span-4 text-sm'>
                <h1 className="text-lg">Language</h1>
                   <div className="w-full">
                   <input name="language" className="mr-2 my-3" type="radio" />
                    <label htmlFor="">Myanmer(Unicode)</label>
                   </div>
                   <div className="w-full">
                   <input name="language" className="mr-2 my-3" type="radio" />
                    <label htmlFor="">Myanmer(Zawgyi)</label>
                   </div>
                   <div className="w-full">
                   <input name="language" className="mr-2 my-3" defaultChecked type="radio" />
                    <label htmlFor="">English</label>
                   </div>
            </div>
            <div className='row-span-2 max-sm:row-span-2'>
            <h1 className="text-lg mb-3">Follow Us On</h1>
            <div className="flex gap-3 text-3xl">
            <IoLogoFacebook/>
            <IoLogoInstagram/>
            <FaViber/>
            <FaTelegram/>
            <IoLogoTwitter/>
            </div>
            </div>
            <div className='row-span-3 max-sm:row-span-6'>
            <h1 className="text-lg mb-3">Contus Us</h1>
                <p className="gap-2 my-3 items-start flex"><IoLocationOutline className="text-6xl mt-[-20px]"/>Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon</p>
                <p className="gap-2 items-start flex"><CiPhone className="text-2xl mt-[-4px]"/>09458489458</p>

            </div>
            <div className='row-span-3'>
            <h1 className="text-lg mb-3">Download Our App</h1>
                <img className="w-1/2" src={qrcode} alt="qrcode" />
            </div>
        </div>
        <p className="text-center my-5 text-xs">@ Copyright 2023 C by Co.Ltd All rights reserved</p>
    </>
  )
}

export default Footer