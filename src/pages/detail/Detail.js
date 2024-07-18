import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { w500_URL } from "../../constant/imgUrl";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllContainer = styled.div`
  display: flex;
`;

const Poster = styled.div``;

const Container = styled.div`
  margin: 40px 50px;
  font-size: 20px;
  font-weight: 300;
  h3 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Intro = styled.div`
  opacity: 0.8;
  line-height: 40px;
`;

const Genre = styled.ul`
  margin-bottom: 50px;
  li {
    list-style: disc;
    margin-left: 20px;
  }
`;

const Overview = styled.div`
  font-size: 20px;
  width: 500px;
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const Detail = () => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(1022789);

        setDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detail);
  // console.log(isLoading);

  return (
    <>
      <Title titleName={"DETAIL"} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <AllContainer>
              <Poster>
                <img src={w500_URL + detail.poster_path} alt="영화포스터" />
              </Poster>

              <Container>
                <h3>{detail.title}</h3>
                <Intro>
                  <p>{`런타임 ${detail.runtime}분`}</p>
                  <p>개봉일 {detail.release_date}</p>
                  <Genre>
                    장르
                    <li>{detail.genres[0].name}</li>
                    <li>{detail.genres[1].name}</li>
                  </Genre>
                </Intro>

                <Overview>
                  줄거리
                  <p>{detail.overview.slice(0, 400)}</p>
                </Overview>
              </Container>
            </AllContainer>
          </Section>
        </>
      )}
    </>
  );
};
