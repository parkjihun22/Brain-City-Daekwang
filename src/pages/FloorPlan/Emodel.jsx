import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "84A", key: "84A" },
    { title: "84B", key: "84B" },
    { title: "101", key: "101" },

  ];

  const vrUrls = {
    "84A": "https://xn--2z1b09co8b02fdohsjj9y9tsrkfdi.com/vr/tour1.html",
    "84B": "https://xn--2z1b09co8b02fdohsjj9y9tsrkfdi.com/vr/tour2.html",
    "101": "https://xn--2z1b09co8b02fdohsjj9y9tsrkfdi.com/vr/tour3.html",

  };

  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <title>브레인시티 메디스파크 로제비앙 - E-모델하우스</title>
        <meta name="description" content="브레인시티 메디스파크 로제비앙의 E-모델하우스를 온라인으로 편리하게 둘러보세요." />
        <meta name="keywords" content="브레인시티 메디스파크 로제비앙, 브레인시티 메디스파크 로제비앙 모아엘가, E-모델하우스, 온라인모델하우스" />
        <link rel="canonical" href="https://www.leecols.kr/FloorPlan/Emodel" />
        <meta property="og:title" content="브레인시티 메디스파크 로제비앙 - E-모델하우스" />
        <meta property="og:description" content="브레인시티 메디스파크 로제비앙의 E-모델하우스를 온라인으로 편리하게 둘러보세요." />
        <meta property="og:image" content="https://www.leecols.kr/Main1.png" />
        <meta property="og:url" content="https://www.leecols.kr/FloorPlan/Emodel" />
        <meta property="og:site_name" content="브레인시티 메디스파크 로제비앙" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="브레인시티 메디스파크 로제비앙 - E-모델하우스" />
        <meta name="twitter:description" content="브레인시티 메디스파크 로제비앙의 E-모델하우스를 온라인으로 편리하게 둘러보세요." />
        <meta name="twitter:image" content="https://www.leecols.kr/Main1.png" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>브레인시티 메디스파크 로제비앙 - E-모델하우스 안내</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
