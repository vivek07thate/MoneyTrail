import React, { useState, useEffect } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Button2 from "./Button2";
import { robot } from "../assets";
// import { debounce } from "lodash"
import "../index.css";

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
  
  const Business = () => (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Guarding Against Deceit, <br className="sm:block hidden" /> Spotting Fraud's Defeat,
          And the Money Trail.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Investigation computed at lightning speeds.
          Built for big data, Fund Trail analyses millions of transactions in hours.
          With automated data handling and pre-configured analytics capabilities investigators are presented with anomalies and red flags soon after data is uploaded.
        </p>
        <Button2 styles={`mt-12`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
  
  const Hero = () => {
    const [fileType, setFileType] = useState(null);
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      const debouncedHandleScroll = debounce(handleScroll, 100);
  
      window.addEventListener("scroll", debouncedHandleScroll);
  
      return () => {
        window.removeEventListener("scroll", debouncedHandleScroll);
      };
    }, []);
  
    const handleFileChange = (event) => {
      const selectedFileType = event.target.files[2]?.type;
      setFileType(selectedFileType);
    };
  
    // Number of layers in the galaxy
    const numLayers = 5;
  
    return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ${fileType ? styles.transition : ""}`}>
            <p className={`${styles.paragraph} ml-2`}>
              {fileType ? (
                `Uploading: ${fileType}`
              ) : (
                "Upload any type of file to get started"
              )}
            </p>
          </div>
          <div className={`flex flex-row justify-between items-center w-full ${styles.transition}`}>
            <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]`}>
              Kuber Netra <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Tracking </span>{"   "}
            </h1>
            <div className={`ss:flex hidden md:mr-4 mr-0`}></div>
          </div>
          <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full ${styles.transition}`}>
            your Money Flow.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 ${styles.transition}`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
            <div style={{ marginTop: '30px' }}>
              <Button className={`${styles.flexCenter} sm:ml-50 ml-0 sm:mt-50 mt-5 ${styles.transition}`} />
            </div>
          </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative ${styles.transition}`}>
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
          {/* Galaxy layers */}
          {Array.from({ length: numLayers }, (_, layerIndex) => (
            <div key={layerIndex} className="layer">
              {/* Number of dots in each layer */}
              {Array.from({ length: 50 }, (_, dotIndex) => (
                <div
                  key={dotIndex}
                  className="dot"
                  style={{
                    position: 'absolute',
                    width: '3px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '50%',
                    zIndex: '0',
                    transition: 'transform 0.6s ease-out, opacity 0.9s ease-out',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `translate(-50%, -50%) translate(${scrollY / (layerIndex + 1)}px, ${scrollY / (layerIndex + 1)}px)`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  // Debounce function
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
   
    }
  }
const SinglePage = () => (
  <div>
    <Hero />
    <Business />
  </div>
);

export default SinglePage;
