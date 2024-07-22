import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding: 150px 20%;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 30% 10vw;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover; // 이미지는 절대 찌그러지면 안됨
`;

const ConWrap = styled.div`
  width: 40%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 40px;
    }
  }
`;

const Info = styled.div`
  span {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
  display: flex;

  @media screen and (max-width: 768px) {
    span {
      padding: 7px 10px;
      font-size: 15px;
    }
  }
`;

const Genres = styled.ul`
  list-style: disc;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  li {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    li {
      font-size: 15px;
    }
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Detail = () => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);

        setDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(detail);
  // console.log(isLoading);
  // 로딩이 없으면 데이터가 불러와지는 척만하고 새로고침하면 사라짐 (필수)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Title titleName={detail.title} />
            <CoverImg
              src={ORIGIN_URL + detail.poster_path}
              alt={detail.title}
            />
            <ConWrap>
              <h3>{detail.title}</h3>
              <Info>
                <span>{detail.release_date}</span>

                <span>{Math.round(detail.vote_average)}점</span>

                <span>{detail.runtime}분</span>
              </Info>

              <Genres>
                {detail.genres.map((gene) => (
                  <li key={gene.id}>{gene.name}</li>
                ))}
              </Genres>

              <Desc>{detail.overview}</Desc>
            </ConWrap>
          </Container>
        </>
      )}
    </>
  );
};

// import 자동완성
// =>폴더 열어놓고 ctrl space

// 웹표준을 안지키면 검색에 노출이 안됨 마케팅이 안됨
