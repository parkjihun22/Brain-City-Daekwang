import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="브레인시티 메디스파크-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '로제비앙' || text === '홍보영상' || text === '체크포인트'| text === '당첨자서류안내'| text === '브레인시티 메디스파크 로제비앙') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지친 하루를 마치고 가장 나에 가까운 본연의 모습으로 돌아와 누리는 프리미엄입니다.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티의 중심 
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드 브레인시티 메디스파크 로제비앙와 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    로제비앙이 선택한 새도시!
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    세계최대규모 평택삼섬전자캠퍼스의 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    가장 높은 브랜드의 첫 시작
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브레인시티 메디스파크 로제비앙
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수준 높은 생활, 첨단신도시내 착한 브랜드 아파트
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    기대하던 모든 프리미엄이 브레인시티 메디스파크 로제비앙에서 펼쳐집니다
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    편리한 생활을 위한 최적의 공간설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    소수에게만 허락된브레인시티 메디스파크 로제비앙, 처음이자 마지막으로 평택에 찾아옵니다
                </div>
            </>
        );
    }
};
