import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import { Title } from "../../components/Title";
import "swiper/css"; //이걸 안넣으면 가로배치가 안됨 제대로된 swiper 모양이 안나옴
import { Movies } from "./components/Movies";
import { MainBanner } from "./components/MainBanner";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        // =>비구조 할당시 이름이 중복될땐 상위와 같이 이름을 변경할 수 있음😊
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();

        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  // console.log(isLoading);
  // console.log(`인기영화:  ${popData}`);
  // console.log(`평점좋음: ${topData}`);
  // console.log(`개봉예정: ${upData}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName="HOME" />
          <MainBanner data={nowData[0]} />

          <Movies title={"현재 상영 영화"} movieData={nowData} />
          <Movies title={"인기 영화"} movieData={popData} />
          <Movies title={"평점 좋음"} movieData={topData} />
          <Movies title={"개봉 예정"} movieData={upData} />
        </>
      )}
    </>
  );
};

// *예외
// 1.컴파일 에러 : 프로그램이 실행되기 전에 발생하는 오류 (실행 자체가 안됨)
// 2.런타임 에러 : 프로그램이 실행 중 발생하는 오류

// try ~ catch 예외처리
// =>예외가 발생할것 같은 코드를 제어함
// ex)
// try(
//   =>예외 발생 가능성이 있는 코드 작성
// )catch(error){
//   예외가 발생했을때 처리
// }finally{
//   예외와 상관없이 무조건 실행해야하는 코드
// }

// 한것 :
// =>로딩컴포넌트 수정
// =>mainbanner 따로 컴포넌트에 빼기 (import 도 지우기)
