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
    title: "아주대병원 품었다···평택 '브레인시티 메디스파크' 분양",
    excerpt:
      "평택 브레인시티 개발사업이 본격화되면서, 의료 · 교육 · 산업이 집약된 신흥 주거지에 대한 기대감이 커지고 있다.특히 이 일대에 들어설 예정인 아주대학교 병원 건립 계획과, 10·15 부동산대책에서 규제지역으로 지정되지 않은 입지라는 점이 맞물리며 더욱 주목받고 있다.평택 브레인시티는 산업 · 의료 교육 인프라가 집약되는 약 480만㎡ 규모의 복합 개발지로, 아직 개발 초기 단계여서 ‘저평가 지역’ 으로 꼽힌다.브레인시티는 삼성전자 평택캠퍼스를 기반으로 한 직주근접 수요는 물론 아주대병원 권역응급센터와 카이스트 평택 캠퍼스 유치 등 굵직한 개발 호재가 추진되고 있다.10·15 부동산대책에서도 규제지역으로 묶이지 않으면서, 대출 및 전매 제한에서 비교적 자유로운 입지다.대광건영과 모아건설산업은 브레인시티의 중심에서 '브레인시티 메디스파크 대광로제비앙 모아엘가(브레인시티 메디스파크)'를 최근 선보였다.브레인시티 메디스파크는 평택시 장안동 평택브레인시티  지하 2층~지상 최고 35층 ∙ 10개동 ∙ 전용면적 59 ~ 101㎡ ∙ 총 1215가구 규모로 조성된다. 분양가상한제가 적용 단지다.단지 앞에 들어서는 아주대병원은 지역거점 의료기관 권역 응급의료센터로 조성될 예정이다.도보로 통학 가능한 초등학교가 오는 2028년 3월 개교 예정이며, 중학교(예정) 부지도 인접해 있다. 향후 카이스트 평택캠퍼스도 인근에 들어서며, 단지와 연계된 대규모 근린공원이 조성 예정에 있다.삼성전자 평택캠퍼스는 물론, 브레인시티 산업단지 ∙ 평택종합물류단지 ∙ 칠괴일반산업단지 ∙ 송탄산업단지 등 평택 주요 산업거점과 가까이 자리했다는 평가다.",
    date: "2025. 7. 21.",
    link: "브레인시티 메디스파크/press/RV5oqPWfPKxFrLQWeu17",
  },
  {
    id: 2,
    title: "10.15 규제 피한 '브레인시티 메디스파크 대광로제비앙 모아엘가', 수요자 관심↑",
    excerpt:
      "대광건영과 모아건설산업이 컨소시엄으로 선보인 '브레인시티 메디스파크 대광로제비앙 모아엘가'는 평택시 장안동 평택브레인시티 일반산업단지 공동 6블록에 지하 2층~지상 최고 35층∙10개동∙전용면적 59~101㎡∙총 1215가구 규모로 조성된다. 입주는 2028년 5월 예정됐다.단지가 위치한 브레인시티는 의료·교육·자연 프리미엄을 동시에 누릴 수 있어 평택의 신흥주거지로 떠오르고 있다. 분양가상한제가 적용돼 합리적인 분양가를 갖췄고, 10·15 부동산대책에서 규제지역으로 지정되지 않아 수요자들의 많은 관심이 쏠리고 있다.다양한 인프라도 조성된다. 단지 앞에는 경기 남부 거점병원으로 조성될 아주대병원이 들어설 예정이다. 도보권에는 2028년 3월 개교를 앞둔 초등학교와 중학교(예정) 부지가 자리해 안전한 통학 여건을 갖출 전망이다. 인근에는 카이스트 평택캠퍼스 조성도 추진되고 있어 지역 교육 인프라의 질을 끌어올릴 것으로 기대된다. 단지와 연계된 대규모 근린공원도 계획돼 있다. 차량으로 10분 내에 이마트 평택점∙홈플러스 송탄점∙코스트코 평택점 등 대형마트 이용이 가능하고 삼성전자 평택캠퍼스를 비롯해 브레인시티 산업단지, 평택종합물류단지, 칠괴일반산업단지 등 평택 주요 산업거점과도 가깝다. ",
    date: "2024. 10. 10.",
    link: "브레인시티 메디스파크/press/jbyMO9WEIbFlnI08ZwWN",
    image: news2Img
  },
  {
    id: 3,
    title: "삼성 평택5공장 착공에 ‘브레인시티 메디스파크 대광로제비앙 모아엘가’ 눈길",
    excerpt:
      "삼성이 향후 5년간 국내에 총 450조원을 투자하기로 한 가운데, 삼성전자 평택캠퍼스 5공장(P5)의 조기 착공 소식이 전해지면서 평택 부동산 시장이 들썩이고 있다.20일 분양업계에 따르면, 최근 삼성전자는 임시 경영위원회를 열고 평택캠퍼스 5공장 골조 공사를 추진하기로 결정했다. 당초 내년 3월 예정돼 있던 착공이 5개월 가량 앞당겨졌다. 평택캠퍼스 5공장은 2028년부터 본격 가동될 예정으로, 완공 시 평택캠퍼스 내 단일 팹 기준 최대 규모의 반도체 생산능력을 갖추게 되며, HBM 등 차세대 메모리를 생산하게 된다.삼성전자는 평택캠퍼스 5공장이 본격 가동되면 글로벌 반도체 공급망과, 국내 반도체 생태계에서 평택사업장의 전략적 위상이 더욱 강화될 것으로 보고 있다.평택캠퍼스는 1공장(P1) 부터 6공장(P6) 까지 계획돼 있으며, 현재 4공장(P4) 공사가 진행 중이다. 4공장은 총 4개 구역으로 나눠 추진 중인데, 1구역은 이미 시운전에 들어갔고 3구역은 내년 3월, 4구역은 2027년 4월 완공될 예정이다. 2구역은 준공 시점이 아직 확정되지 않았다.삼성전자가 중장기 반도체 수요를 확인하며 대규모 투자를 재개하자, 관망세를 보이던 평택 부동산 시장에도 즉각적인 반응이 나타나고 있다. 실제로 선착순 계약을 진행 중인 ‘브레인시티 메디스파크 대광로제비앙 모아엘가’ 는 단기간 내 높은 계약률을 기록하며 화제가 되고 있다. 견본주택에 연일 계약 희망자들이 몰리며, 전용 59㎡는 전 가구 마감된 것으로 알려졌다. 전용 101㎡ 역시, 인근 단지 대비 합리적인 분양가와 우수한 상품성 등으로 높은 계약률을 보이고 있다.분양 관계자는 “상당 기간 미분양 물량이 적체돼 있던 브레인시티에서, 이처럼 계약이 빠르게 이루어지고 있는 것은 이례적이다” 며 “반도체 특수와 10·15 부동산 대책 이후 비규제지역이라는 점이 맞물리면서, 수요자 문의가 쇄도하며 계약이 속속 이뤄지고 있다”고 말했다.대광건영과 모아건설산업이 컨소시엄으로 선보인 ‘브레인시티 메디스파크 대광로제비앙 모아엘가’는 평택시 장안동 평택브레인시티 일반산업단지 공동 6블록에 지하 2층~지상 최고 35층∙10개동∙전용면적 59 ~ 101㎡ 총 1215가구 규모로 조성된다. 분양가상한제가 적용돼 합리적인 분양가를 갖추고 있으며, 계약금 1천만원으로 입주시까지 추가적인 자금 부담도 최소화했다. 입주는 2028년 5월 예정이다.또한 삼성전자 평택캠퍼스는 물론, 브레인시티 산업단지∙평택종합물류단지∙칠괴일반산업단지∙송탄산업단지 등 평택 주요 산업거점과도 가까워 직주근접 여건 역시 뛰어나다.견본주택은 경기도 평택시 죽백동에 개관중이다.",
    date: "2024. 10. 10.",
    link: "브레인시티 메디스파크/press/8sb0wDNKeAGM4P7DQo6a",
    image: news3Img
  },
  {
    id: 4,
    title: "‘의료·학세권·숲세권 뜬다’ 평택 브레인시티 메디스파크, 지제역 삼성반도체 가치도 흡수",
    excerpt:
      "경기도 평택시 장안동 브레인시티 일반산업단지 공동 6블록에 들어서는 ‘평택 브레인시티 메디스파크’가 분양에 나서며 부동산 시장의 이목을 집중시키고 있다.총 세대수 1,215세대의 대단지(지하 2층~지상 최고 35층, 10개 동)로 구성되며, 전용면적 59㎡부터 84㎡ 101㎡까지 다채로운 평형이 마련됐다. 4베이 판상형 구조, 팬트리 및 알파룸 등 특화설계가 적용됐다.입주는 2028년 5월 예정이며, 분양가상한제 적용 단지로서 실수요자·투자자 모두에게 주목받고 있는 아파트다. 의료·연구 복합 클러스터에 인접해 있는 ‘평택 브레인시티 메디스파크(대광로제비앙 모아엘가)’는 단지 바로 앞 아주대학교 병원(평택)이 들어설 예정으로, 경기 남부권 의료 거점의 역할이 기대된다. 또한 ‘메디스파크’라는 이름에서 알 수 있듯 의료·R&D 기능과 주거가 결합한 미래지향적 입지로 설계되었다.거기에 교육·자연·생활인프라라는 ‘트리플’ 프리미엄을 갖췄다.초·중학교 개교 예정 부지가 단지 도보권에 위치해 있어 안심 학군이 확보됐다. 약 7천여평 규모 대규모 근린공원 및 조경 공간이 조성될 예정으로 쾌적한 주거환경이 마련된다. 또한 삼성전자 평택캠퍼스와 브레인시티 내 첨단산업단지와 R&D센터 및 평택종합물류단지 등과 인접해 있어 직주근접 수요가 풍부하다.합리적 가격과 비규제 지역이라는 잇점과 함께 분양가상한제 적용 단지여서 대출·전매 제한 등 부담이 상대적으로 낮아서 실수요자 및 투자자 모두에게 유연한 접근이 가능하다. 연구기관·의료시설이 집결된 브레인시티 핵심부에 위치한다는 점에서 주변 일반 주거지보다 한 발 앞선 프리미엄이 기대된다.브레인시티 메디스파크는 단지 입주 시점 이후에도 지속적으로 가치가 올라갈 환경을 갖추고 있다. 아주대병원 의료 클러스터 준공 이후 의료서비스 수준이 상승하고, 그에 따른 주거 수요가 증가할 가능성이 크다.카이스트 평택캠퍼스 등의 교육 인프라 확장 계획이 있어 장기적 교육 프리미엄이 부각된다. 산업단지와 물류단지 등이 인접해 있어 직주근접이 실현되며 출퇴근 시간을 줄이는 이점을 가진다. 비규제지역이라는 혜택을 누리며 향후 인구 유입 및 주거 수요 증가에 따른 가격 상승 여력이 존재한다.모델하우스 방문은 예약 필수이며, 이 단지는 ‘지금 움직이지 않으면 기회가 사라진다’는 말이 어울릴 만큼 관심이 뜨겁다.평택 브레인시티 6블럭 메디스파크 대광로제비앙 모아엘가 모델하우스 관계자는 “견본주택 개관 직후부터 대기 줄이 길게 이어지는 등 관심이 폭발적이다. 모델하우스 방문은 선예약제로 운영되기에 방문 전 반드시 예약하고, 잔여 물량 및 동호수 여부를 체크하길 바란다”고 전했다.단지에 대한 정확한 분양가와 위치, 평면도, 단지배치도, 주차대수, 건폐율, 계약율, 분양율, 잔여세대, 평택 아파트 매매 등에 대한 안내도 아래 대표전화(모바일에만 노출)로 빠르게 알수 있다.",
    date: "2024. 10. 10.",
    link: "브레인시티 메디스파크/press/WHih7mcwAA0z1QZnCSr0",
    image: news4Img
  },
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
              alt="브레인시티 메디스파크-mainimage1"
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
                <div className={styles.mainImageText}>브레인시티 메디스파크</div>
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
                    alt="브레인시티 메디스파크 관심고객등록"
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
                  브레인시티 메디스파크 POINT
                </div>
                <div className={styles.text3}>
                  - 브레인시티 중심상업지구 도보 3분  <br />
                  - 첨단 AI 아주대학교 종합병원 도보 5분 <br />
                  - 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원
                  <br />- 모두를 누리는 브레인시티 메디스파크 
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
                  alt="브레인시티 메디스파크 브랜드소개-image2"
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
                    브레인시티 메디스파크
                  </span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    브레인시티 메디스파크가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="브레인시티 메디스파크 입지환경소개-image2"
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
                  브레인시티 메디스파크에서 펼쳐집니다
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
                alt="브레인시티 메디스파크 아파트 조감도-image3"
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
                  alt="브레인시티 메디스파크 브랜드소개-image4"
                />
                <div className={styles.text1}>브레인시티 메디스파크</div>
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
      <h2>브레인시티 메디스파크</h2>
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
                  브레인시티 메디스파크
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    브레인시티 메디스파크가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="브레인시티 메디스파크 오시는길안내-image1" />
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
    alt="브레인시티 메디스파크 mobilemain-image1"
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
        브레인시티 메디스파크
      </div>
    </div>
  </div>
</div>

          
          

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
              브레인시티 메디스파크 POINT
            </div>
            <div className={styles.text3}>
                  - 브레인시티 중심상업지구 도보 3분  <br />
                  - 첨단 AI 아주대학교 종합병원 도보 5분 <br />
                  - 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원
                  <br />- 모두를 누리는 브레인시티 메디스파크
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
                  브레인시티 메디스파크가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="브레인시티 메디스파크 모바일 입지안내 이미지"
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
                브레인시티 메디스파크에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 <br /> 브레인시티 메디스파크에서<br />
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="브레인시티 메디스파크 모바일 조감도 이미지"
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
                alt="브레인시티 메디스파크 브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div> */}
          <MobileNewsSection newsList={newsList} />

          {/* 모바일 방문예약 섹션 */}
<div className={styles.mobileVisitContainer}>
  <h2>브레인시티 메디스파크</h2>
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
                alt="브레인시티 메디스파크 오시는길안내-mobileimage2"
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
