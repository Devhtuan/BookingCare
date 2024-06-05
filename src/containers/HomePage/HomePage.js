import { useRef, useState, useEffect } from "react";

import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import Services from "./Section/Services";
import MedicalFacility from "./Section/MedicalFacility";
import OutStandingDoctor from "./Section/OutStandingDoctor";
import HandBook from "./Section/HandBook";
import About from "./Section/About";
import HomeFooter from "./HomeFooter";

import "./HomePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from "react-redux";

export default function HomePage(){
    const [settings, setSettings] = useState({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    });


    const { isLoggedIn, userInfo} = useSelector((state) => ({
      isLoggedIn: state.user.isLoggedIn,
      userInfo: state.user.userInfo,
    }));
  
    return (
      <div>
        <HomeHeader isShowBanner={true} />
        <Services />
        <Specialty settings={settings} />
        <MedicalFacility settings={settings} />
        <OutStandingDoctor settings={settings} />
        <About />
        <HomeFooter />
      </div>
    );
}

