import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

// PC, 모바일 전용 CSS 모듈 (Main.module.scss 안에 모든 스타일을 넣은 경우)
import styles from "./Main.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import MobileOverviewSection from "../../components/MobileOverviewSection/MobileOverviewSection";
import DarkComplexSection from "../../components/DarkComplexSection/DarkComplexSection";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import
// import UrlContainer from "../../components/UrlContainer/UrlContainer";\
import UnitInfoSection from "../../components/UnitInfoSection/UnitInfoSection";
import MobileNewsSection from "../../components/MobileNewsSection/MobileNewsSection";

import news2Img from "../../assets/news/news2.jpg";
import news3Img from "../../assets/news/news3.jpg";
import news4Img from "../../assets/news/news4.jpg";



import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";

const section3Contents = [
	{
		imgSrc: section3_Image1,
		title: "PREMIUM 01",
		text1: `1215세대 랜드마크 로제비앙`,
		text2: `브레인시티를 대표할<br />
			      대단지 브랜드 프리미엄`,
		link: "/BusinessGuide/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section3_Image2,
		title: "PREMIUM 02",
		text1: `여유로운 직주근접 단지`,
		text2: `세계최대규모 삼성전자 평택캠퍼스<br />
			      송탄·칠괴 산단,KG모빌리티 등`,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section3_Image3,
		title: "PREMIUM 03",
		text1: `다 갖춘 고품격 커뮤니티`,
		text2: `브레인시티 내 최초 실내 수영장 및<br />
			      독서실 골프클럽 등 대규모 커뮤니티`,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section3_Image4,
		title: "PREMIUM 04",
		text1: `합리적 분양가 상한제`,
		text2: `입주자의 경제적 부담을 낮춘<br />
			      내 집 마련의 기회`,
		link: "/LocationEnvironment/primium",
		linkText: "더 알아보기 >"
	}
];

const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (생년월일, 거주지역 필드 추가)
const [registration, setRegistration] = useState({
  name: "",
  phone: "",
  birthday: "",
  residence: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setRegistration((prev) => ({
    ...prev,
    [name]: value,
  }));
};

 // ─── 예시용 뉴스 데이터 (초기 더미) ───
 const newsList = [
   {
     id: 1,
     title: "대광건영∙모아건설산업, 평택 ‘브레인시티 메디스파크 로제비앙 모아엘가’ 분양",
     excerpt:
       "㈜대광건영과 모아건설산업㈜ 컨소시엄이 경기도 평택시 브레인시티 내에 대규모 주거단지 ‘브레인시티 메디스파크 로제비앙 모아엘가’를 선보인다. 11일 업계에 따르면 ‘브레인시티 메디스파크 로제비앙 모아엘가’는 평택시 장안동 평택브레인시티 일반산업단지 공동 6블록에 지하 2층에서 지상 최고 35층, 총 10개 동, 전용면적 59~101㎡의 총 1215가구 규모로 조성된다. 분양가상한제가 적용돼 합리적인 분양가로 공급되는 것이 특징이다. ",
     date: "2025. 7. 21.",
     link: "브레인시티대광/press/zLn6aVw6I4Z6jdYF9glQ",
     // image: "https://yourdomain.com/path/to/image.jpg",  // 이미 있으면 넣고
   },
   {
     id: 2,
     title: "평택 브레인시티 핵심 입지 ‘로제비앙 모아엘가’ 주목",
     excerpt:
       "경기 평택시 브레인시티 내 최고 입지에 들어서는 ‘브레인시티 메디스파크 로제비앙 모아엘가’가 주목받고 있다. ㈜대광건영과 모아건설산업㈜이 컨소시엄으로 선보이는 이 단지는 향후 평택의 미래 성장축으로 주목받는 브레인시티 중심에 들어서 의료·교육·자연·교통 프리미엄을 두루 갖췄다는 평가를 받고 있다. 브레인시티 메디스파크 로제비앙 모아엘가는 평택시 장안동 평택브레인시티 일반산업단지 공동 6블록에 지하 2층~지상 최고 35층, 10개 동, 1215가구(전용면적 59~101㎡) 규모로 조성된다.",
     date: "2024. 10. 10.",
     link: "브레인시티대광/press/bPNoZcbLXzEmk9lgpMbq",
     image: news2Img
   },
   {
    id: 3,
    title: "대광건영, 의도적 '깜깜이 분양'",
    excerpt:
      "대광건영이 깜깜이 분양 의혹에 휩싸였다. 이달 경기 평택시에 공급한 '브레인시티 메디스파크 로제비앙 모아엘가'를 분양하면서 소극적 마케팅을 펼쳐 일부러 저조한 성적을 거뒀다는 얘기다.  깜깜이 분양은 마케팅을 최소한으로 해 일부러 미분양물량을 만든 뒤 조건을 변경해 선착순으로 파는 것을 말한다.  10일 한국부동산원 청약홈에 따르면 대광건영은 지난 8일과 9일 브레인시티 메디스파크 로제비앙 모아엘가 1·2순위 청약을 실시, 1200가구 모집에 단 38명만 신청하며 모든타입 청약이 미달됐다. 평균경쟁률은 0.03대 1로 이는 지난해 1월 이후 브레인시티에 분양한 단지중 가장 낮은 경쟁률이다. 이 단지는 시공능력평가 49위 대광건영과 152위 모아건설산업이 시공, 대광건영 특수관계사인 디케이월드가 시행을 맡고 있다. 사실상 대광그룹이 시행, 시공을 모두 맡는 자체사업장으로 봐도 무방하다. ",
    date: "2024. 10. 10.",
    link: "브레인시티대광/press/FICkxW1EOdJXDjVeuNnu",
    image: news3Img
  },
  {
    id: 4,
    title: "브레인시티 메디스파크 로제비앙 모아엘가, 끝내 청약 미달",
    excerpt:
      "대광건영·모아건설산업이 경기도 평택에 공급하는 ‘브래인시티 메디스파크 로제비앙 모아엘가’가 청약에서 부진한 성적을 거뒀다. 11일 한국부동산원 청약홈에 따르면 브래인시티 메디스파크 로제비앙 모아엘가는 지난 8~9일 실시된 1·2순위 청약에서 특별공급을 제외한 1200가구 모집에 38명만 신청돼 마감에 실패했다. 5개 주택형이 모두 미달됐다. 전용면적 59㎡A형은 90가구 모집에 1·2순위를 합쳐 15명만 분양을 신청했고 전용 59㎡B형은 50가구 모집에 25명이 관심을 보였다. 특히 560가구가 배정된 전용 84㎡A형에는 불과 14명이 청약통장을 사용했다. 또 167가구가 배정된 전용 84㎡B형은 3명만이 도전했다.",
    date: "2024. 10. 10.",
    link: "브레인시티대광/press/ufddmvgYLAI64phC97WV",
    image: news4Img
  },
   // ...원하시는 만큼 항목 추가
 ];


  // 기존 제출 핸들러는 Formspree를 사용할 것이므로 제거(또는 사용하지 않음)
  // const handleRegistrationSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `등록되었습니다!\n이름: ${registration.name}\n연락처: ${registration.phone}\n이메일: ${registration.email}\n방문일자: ${registration.visitDate}`
  //   );
  //   setRegistration({ name: "", phone: "", email: "", visitDate: "" });
  // };

  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PC에서만 페이지 전환 스크롤 이벤트 처리
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile]);

  // PC에서 페이지 번호에 따라 스크롤 이동
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* SEO 최적화를 위한 메타 태그 추가 */}
        <title>▪브레인시티 메디스파크 로제비앙</title>
        <meta
          name="description"
          content="브레인시티 메디스파크 로제비앙ㅣ☎️(대표)1533-8848ㅣ브레인시티 메디스파크 로제비앙ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
       <meta name="keywords"
        content="브레인시티메디스파크, 브레인시티메디스파크로제비앙, 브레인시티메디스파크대광로제비앙" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.leecols.kr/" />

        {/* 모바일 친화성을 위한 추가 태그 */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph - 소셜 미디어(페이스북, LinkedIn 등) 공유 최적화 */}
        <meta
          property="og:title"
          content="▪브레인시티 메디스파크 로제비앙"
        />
        <meta
          property="og:description"
          content="브레인시티 메디스파크 로제비앙ㅣ☎️(대표)1533-8848ㅣ브레인시티 메디스파크 로제비앙ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta property="og:url" content="https://www.leecols.kr/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.leecols.kr/Main1.png" // 실제 메인 이미지 URL로 변경하세요.
        />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="브레인시티 메디스파크 로제비앙"
        />
        <meta
          name="twitter:description"
          content="브레인시티 메디스파크 로제비앙ㅣ☎️(대표)1533-8848ㅣ브레인시티 메디스파크 로제비앙ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta
          name="twitter:image"
          content="https://www.leecols.kr/Main1.png" // 실제 이미지 URL로 변경하세요.
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도를 높이기 위한 스키마 마크업 */}
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "ApartmentComplex",
        "name": "브레인시티 메디스파크 로제비앙",
        "description": "브랜드 평판 1위 프리미엄 아파트. 방문 예약 시 신세계상품권 증정 등 다양한 혜택을 제공합니다.",
        "url": "https://www.leecols.kr/",
        "image": "https://www.leecols.kr/Main1.png",
        "telephone": "1533-8848",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "경기도 평택시 장안동 평택 브레인시티 일반산업단지 공동6B",
          "addressLocality": "평택",
          "addressRegion": "경기도",
          "postalCode": "우편번호"
        }
      }
    `}
        </script>
      </Helmet>
      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {/* {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )} */}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="브레인시티 메디스파크 로제비앙-mainimage1"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                압도적인 입지{" "}
                <span className={styles.greyText}>완벽한 인프라</span> |
                1,245세대{" "}
                <span className={styles.greyText}>메머드급 대단지</span> |
                계약금 5%로 내집마련기회{" "}
                <span className={styles.greyText}>착한조건</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>
                 평택 브레인시티의 중심이 될
                </div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>브레인시티 메디스파크 로제비앙</div>
              </div>
              {/* 기존 관심고객 등록 링크 대신 방문예약 버튼 클릭 시 팝업 오픈 */}
              <div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="브레인시티 메디스파크 로제비앙 관심고객등록"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                  브레인시티 메디스파크 로제비앙 POINT
                </div>
                <div className={styles.text3}>
                  - 브레인시티 중심상업지구 도보 3분  <br />
                  - 첨단 AI 아주대학교 종합병원 도보 5분 <br />
                  - 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원
                  <br />- 모두를 누리는 브레인시티 메디스파크 로제비앙
                </div>
                <div className={styles.text4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInterestPopupOpen(true);
                    }}
                  >
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img
                  src={section1_Image1}
                  alt="브레인시티 메디스파크 로제비앙 브랜드소개-image2"
                />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는
                  <br />
                  <span>
                    최고의 브랜드 아파트 <br />
                    브레인시티 메디스파크 로제비앙
                  </span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    브레인시티 메디스파크 로제비앙가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="브레인시티 메디스파크 로제비앙 입지환경소개-image2"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이
                  <br />
                  브레인시티 메디스파크 로제비앙에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른
                  <br />
                  프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span>
                  <br />
                  안전한 이동을 위한 세심한 <span>단지설계</span>
                  <br />
                  편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img
                src={section2_Image1}
                alt="브레인시티 메디스파크 로제비앙 아파트 조감도-image3"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div
                    className={styles.boxText1}
                    dangerouslySetInnerHTML={{ __html: section.text1 }}
                  />
                  <div
                    className={styles.boxText2}
                    dangerouslySetInnerHTML={{ __html: section.text2 }}
                  />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img
                  src={section4_Image1}
                  alt="브레인시티 메디스파크 로제비앙 브랜드소개-image4"
                />
                <div className={styles.text1}>브레인시티 메디스파크 로제비앙</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>
                  당신의 삶, 그 고귀함이 계속되길
                </div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  더 알아보기 {">"}
                </Link>
              </div>
            </div>
          </div>
          <div id="interestForm" className={styles.section}></div>

          {/* ================== 방문예약 섹션 (PC) ================== */}
<div className={styles.pcVisitContainer}>
  {/* 상단 타이틀 영역 (좌: 제목/부제, 우: 안내문구) */}
  <div className={styles.pcTitleRow}>
    <div className={styles.leftTitle}>
      <h2>브레인시티 메디스파크 로제비앙</h2>
      <p>방문예약</p>
    </div>
    <div className={styles.rightText}>
      방문예약 등록 시 모델하우스 주소 SMS발송 및
      <br />
      잔여세대를 안내드립니다.
    </div>
  </div>

  {/* 입력 폼 */}
  <form
    className={styles.pcVisitForm}
    action="https://formspree.io/f/xblkodpa"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  

    <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />

    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  브레인시티 메디스파크 로제비앙
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    브레인시티 메디스파크 로제비앙가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="브레인시티 메디스파크 로제비앙 오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>
          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {/* {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )} */}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
  <img
    src={mobileImageMain}
    className={styles.mainImage}
    alt="브레인시티 메디스파크 로제비앙 mobilemain-image1"
  />
  <div className={styles.overlay}></div>

  {/* 기존 텍스트 */}
  <div className={styles.mainImageTextBox1}>
    <div className={styles.mainImageTextSub1}>
      평택 브레인시티 중심의
      <br />
      <span className={styles.greyText1}>높은 미래가치</span>
      <br />
      메머드급 대단지
      <br />
      <span className={styles.greyText1}>브랜드 프리미엄</span>
      <br />
      계약금 5%로 내집마련기회
      <br />
      <span className={styles.greyText1}>착한조건</span>
    </div>
    <div className={styles.mainImageTitleBox1}>
      <div className={styles.mainImageText1}>
        브레인시티 메디스파크 로제비앙
      </div>
    </div>
  </div>
</div>

          
          

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
              브레인시티 메디스파크 로제비앙 POINT
            </div>
            <div className={styles.text3}>
                  - 브레인시티 중심상업지구 도보 3분  <br />
                  - 첨단 AI 아주대학교 종합병원 도보 5분 <br />
                  - 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원
                  <br />- 모두를 누리는 브레인시티 메디스파크 로제비앙
            </div>
            <div className={styles.text4}>
              {/* 외부 링크 대신 방문예약 클릭 시 팝업 호출 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInterestPopupOpen(true);
                }}
                className={styles.popupBtn}
              >
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>
          <MobileOverviewSection />
                 {/* ─── 2.5. 중간에 풀-스크린 이미지 섹션 ───
         <div className={styles.mobileMiddleImage}>
           <img
             src={require("../../assets/Bener/event.jpg")}
            alt="단지 전경 추가 이미지"
             className={styles.middleImage}
           />
         </div> */}
          
         {/* ② DarkComplexSection 추가 */}
         <section className={styles.darkSection}>
           <DarkComplexSection />
         </section>

          <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
                반도체 클러스터의 중심으로 사는
                <br />
                <span>최고의 브랜드 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해
                  <br />
                  브레인시티 메디스파크 로제비앙가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="브레인시티 메디스파크 로제비앙 모바일 입지안내 이미지"
            />
          </div>

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이
                <br />
                브레인시티 메디스파크 로제비앙에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 <br /> 브레인시티 메디스파크 로제비앙에서<br />
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="브레인시티 메디스파크 로제비앙 모바일 조감도 이미지"
            />
          </div>

          <UnitInfoSection />

          {/* <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div> */}

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>


          {/* <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="브레인시티 메디스파크 로제비앙 브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div> */}
          <MobileNewsSection newsList={newsList} />

          {/* 모바일 방문예약 섹션 */}
<div className={styles.mobileVisitContainer}>
  <h2>브레인시티 메디스파크 로제비앙</h2>
  <p className={styles.mobileSubTitle}>방문예약</p>
  <p className={styles.mobileInfoText}>
    방문예약 등록 시 모델하우스 주소 SMS발송 및<br />
    잔여세대를 안내드립니다.
  </p>

  <form
    className={styles.mobileVisitForm}
    action="https://formspree.io/f/xblkodpa"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />
    



    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="브레인시티 메디스파크 로제비앙 오시는길안내-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
