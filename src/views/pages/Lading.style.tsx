import styled from "styled-components";

const AwardBox = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`;

const AwardItem = styled.div<{ icon: string }>`
  opacity: 0;
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.icon});
  background-position: left top;
  background-repeat: no-repeat;
  color: var(--color-gray800);
  font-weight: bold;
  will-change: transform;
  animation: floatFadeIn 700ms 200ms ease-in-out forwards;
`;

const CountupSectionWrapper = styled.section`
  width: 100%;
  height: 552px;
  background-color: var(--color-white);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const CountupZone = styled.div`
  width: 1040px;
`;

const LogoBox = styled.div<{ logo: string }>`
  opacity: 0;
  background-image: ${({ logo }) => `url(${logo})`};
  background-repeat: no-repeat;
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  font-family: sans-serif;
  text-align: center;
  will-change: transform;
  animation: floatFadeIn 700ms 0ms ease-in-out forwards;
`;

const MetricZone = styled.article`
  opacity: 0;
  margin-left: 623px;
  padding-top: 150px;
  will-change: transform;
  animation: floatFadeIn 700ms 100ms ease-in-out forwards;

  & > h3 {
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: 20px;
    margin-top: 0;
  }
`;

export {
  AwardBox,
  AwardItem,
  CountupSectionWrapper,
  CountupZone,
  LogoBox,
  MetricZone,
};
