import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "확정된 개발호재로<br />평택을 더 새롭게 살수록 높아지는 미래가치",
    contentText:
      "삼성전자 평택캠퍼스 세계 최대 160만평규모(약289㎡)<br />최첨단 반도체 산업의 최중심",
  },
  {
    img: section2Image2,
    titleText: "도보5분으로<br />의세권을 누리릴 수 있는 프리미엄",
    contentText:
      "아주대 첨단의료AI복합타운<br />AI활용 첨단의료시설로<br /> 500병상 규모로 2030년 개원 예정",
  },
  {
    img: section2Image3,
    titleText: "수도권 시내·외를 더 빠르게<br />광역으로 통하는 특급 교통",
    contentText:
      "지제역 복한환승센터,송탄IC<br />1호선, SRT (현재운행중), KTX, GTX-A/C 확정<br /> 수도권 내 유일 펜타역세권 프리미엄",
  },
  {
    img: section2Image4,
    titleText:
      "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />SMART 인프라",
    contentText:
      "브레인시티내 초·중·고 모두 개교예정 · 카이스트 평택 캠퍼스 2027년 개교예정<br />이마트, 코스트코 , CGV 등 편의시설 인접",
  },
  {
    img: section2Image5,
    titleText: "브레인시티 대단지 프리미엄",
    contentText: "총 1,215세대 메가타운으로 <br / >누리는 대단지 프리미엄과<br / >단지안 도서관 및 체육시설 ",
  },
  {
    img: section2Image6,
    titleText:
      "브레인시티 최대 중심상업지구<br />도보 3분권내 초근접<br /> 마지막 브랜드단지 ",
    contentText:
      "브레인시티 대장입지 <br />로제비앙 프리미엄에 더한 슬세권 프리미엄",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>브레인시티 메디스파크 로제비앙 - 입지환경</title>
        <meta
          name="description"
          content="브레인시티 메디스파크 로제비앙의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          name="keywords"
          content="브레인시티 메디스파크 로제비앙, 브레인시티 메디스파크 로제비앙, 브레인시티 메디스파크 로제비앙모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.leecols.kr/LocationEnvironment/intro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="브레인시티 메디스파크 로제비앙 - 입지환경"
        />
        <meta
          property="og:description"
          content="브레인시티 메디스파크 로제비앙의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          property="og:image"
          content="https://www.leecols.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.leecols.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="브레인시티 메디스파크 로제비앙" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="브레인시티 메디스파크 로제비앙 - 입지환경"
        />
        <meta
          name="twitter:description"
          content="브레인시티 메디스파크 로제비앙의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          name="twitter:image"
          content="https://www.leecols.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.leecols.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "브레인시티 메디스파크 로제비앙 - 입지환경",
											"description": "브레인시티 메디스파크 로제비앙의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
",
											"url": "https://www.leecols.kr/LocationEnvironment/intro"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        브레인시티 메디스파크 로제비앙 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        브레인시티 메디스파크 로제비앙의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 브레인시티</div>
        <div>살수록 높아질 로제비앙</div>
        <div>도시를 압도할 자부심 로제비앙</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="브레인시티 메디스파크 로제비앙입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 브레인시티 메디스파크 로제비앙 사업주체 및 시공사와 무관합니다.
        </div>
        <div className={styles.notice}>
          ※첨단 시스템 반도체 클러스터(계획) : 국토교통부고시 제2024-853호 「평택 첨단시스템반도체 클러스터 국가산업단지 산업단지계획 및 지형도면 고시」 (2024.12.31)에 의한 것으로 향후 국토교통부에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※평택 반도체 클러스터 일반산업단지(예정) : 평택시 고시 제2024-775호 「평택 반도체클러스터 일반산업단지계획(8차 변경) 승인 고시」 (2024.12.26)에 의한 것으로 향후 시행자 (평택일반산업단지(주))에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※평택이동 공공주택지구(계획) : 국토교통부 고시 제2025-30호「평택이동 공공주택지구 지정 고시」(2025.01.24)에 의한 것으로 향후 국토교통부에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※경강선 연장(추진중) : 평택시 언론보도 “평택특례시, 경강선 연장’ 제5차 국가철도망계획 반영 건의” (2024.02.08)를 표현한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
        <div className={styles.notice}>
          ※국지도84호선 개설(예정) : 화성시 고시 제2024-11호 「국지도84호선(중리~천리) 도로건설공사 도로구역 결정(변경) 고시」 (2024.01.04)에 의한 것으로 향후 국토교통부에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※국도45호선 확장(추진중) : 국토교통부 보도자료 “평택 반도체 국가산업단지 지정, 세계 최대의 ‘반도체 특화 도시’로 조성한다” (2024.12.26)에 의한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
        <div className={styles.notice}>
          ※국지도57호선 확장(추진중) : 평택시 언론보도 “평택특례시, 반도체 국가산단 연계 도로망 구축 박차” (2024.03.28)에 의한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
        <div className={styles.notice}>
          ※동평택IC 신설(추진중) : 평택시 언론보도 “평택특례시, 세종-포천고속도로 ‘동평택IC’ 신설 위한 큰 관문 통과” (2023.12.22)에 의한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
