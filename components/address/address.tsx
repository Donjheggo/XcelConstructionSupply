import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdPhoneEnabled } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export default function Address() {
  return (
    <div id="address" className="container max-w-screen-2xl mx-auto pt-32">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-stone-700">
        Address
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
        <div>
          <iframe
            className="rounded-xl"
            width="95%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Roland%20Sering%20St,%20Surigao%20City,%208400%20Surigao%20del%20Norte+(Xcel%20Construction%20Supply)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <p className="xl:text-lg text-stone-700 flex items-center">
            <FaMapLocationDot className="text-2xl"/>
            <span className="ml-4">
              Roland Sering Street, Navalca, Brgy. San Juan, Surigao City,
              Philippines
            </span>
          </p>
          <p className="xl:text-lg text-stone-700 flex items-center">
            <FaRegClock className="text-2xl"/>
            <span className="ml-4">
              Monday to Saturday <br />
              8:00AM to 5:00PM
            </span>
          </p>
          <p className="xl:text-lg text-stone-700 flex items-center">
            <MdPhoneEnabled className="text-2xl"/>
            <span className="ml-4">+639632984125</span>
          </p>
          <p className="xl:text-lg text-stone-700 flex items-center">
            <MdOutlineMailOutline className="text-2xl"/>
            <span className="ml-4">XcelConstructionSupply@gmail.com</span>
          </p>
          <p className="xl:text-lg text-stone-700 flex items-center">
            <FaFacebook className="text-2xl"/>
            <a href="https://www.facebook.com/XcelConstructionSupply" target="_blank" className="ml-4 underline">XcelConstructionSupply</a>
          </p>
        </div>
      </div>
    </div>
  );
}
