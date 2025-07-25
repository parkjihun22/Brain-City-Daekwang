import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
const menuContents = [
  { title: "84A", key: "84A" },
  { title: "84B", key: "84B" },
  { title: "101A", key: "101" },

];

const vrUrls = {
  "84A": "https://xn--2z1b09co8b02fdohsjj9y9tsrkfdi.com/vr/tour1.html",
  "84B": "https://xn--2z1b09co8b02fdohsjj9y9tsrkfdi.com/vr/tour2.html",
  "101": "https://xn--2z1b09co8b02fdohsjj9y9tsrkfdi.com/vr/tour3.html",
};

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("84A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
