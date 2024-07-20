import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { w500_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyled";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.size};
`;

const STitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const params = {
  slidesPerView: 7.3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 7.3,
    },
    640: {
      slidesPerView: 5.3,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    }, // =>swiper 반응형은 따로 있음 (홈페이지 참고)
  },
};

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

export const Movies = ({ title, movieData }) => {
  return (
    <Section>
      <STitle>{title}</STitle>
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <img src={`${w500_URL}${data.poster_path}`} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

// ... 스프레드 연산자
// =>중괄호를 빼줌
