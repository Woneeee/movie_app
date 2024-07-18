import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { ORIGIN_URL } from "../../../constant/imgUrl";

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 420px ${spacing.size};
  position: relative;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative; // 띄우려고 (가끔 글자가 blckbg뒤로 갈때가 있음 앞으로 해놔도)
  }

  p {
    width: 600px;
    line-height: 30px; /* 기본16px 기준으로 잡으면 됨 */
    font-size: 20px;
    opacity: 0.7; /* 문단은 투명도 낮게 */
    font-weight: 300; /* 타이틀 강조를 위해 */
  }

  @media screen and (max-width: 768px) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  /* =>불투명도: 1로 갈수록 불투명 / 0으로 갈수록 투명 */
  /* =>rgb 000 : 불이 다 꺼졌다고 생각 (검정) / rgb 255 255 255 : 불이 다 켜졌다고 생각 (흰색) */
`;

export const MainBanner = ({ data }) => {
  return (
    <Container $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
    </Container>
  );
};
