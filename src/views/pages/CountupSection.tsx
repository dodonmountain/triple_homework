import React from "react";

import Countup from "../components/Countup";
import appStoreIcon from "../../assets/badge-apple@4x.png";
import googlePlayIcon from "../../assets/play-store@2x.png";
import logo from "../../assets/triple@2x.png";

import {
  AwardBox,
  AwardItem,
  CountupSectionWrapper,
  CountupZone,
  LogoBox,
  MetricZone,
} from "./Lading.style";

const CountupSection = (): React.ReactElement => {
  const statistics = {
    reviewCount: 100,
    shceduleCount: 470,
    travelerCount: 700,
  };

  return (
    <CountupSectionWrapper>
      <CountupZone>
        <LogoBox logo={logo}>2021년 12월 기준</LogoBox>
        <MetricZone>
          <h3>
            <strong>
              <Countup end={statistics.travelerCount} duration={2000} />만 명의{" "}
            </strong>
            여행자
          </h3>
          <h3>
            <strong>
              <Countup end={statistics.reviewCount} duration={2000} />만 개의{" "}
            </strong>
            여행 리뷰
          </h3>
          <h3>
            <strong>
              <Countup end={statistics.shceduleCount} duration={2000} />만 개의{" "}
            </strong>
            여행 일정
          </h3>
        </MetricZone>
        <AwardBox>
          <AwardItem icon={googlePlayIcon}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardItem>
          <AwardItem icon={appStoreIcon}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardItem>
        </AwardBox>
      </CountupZone>
    </CountupSectionWrapper>
  );
};

export default CountupSection;
