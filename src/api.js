const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGVmNTZkYWIzNmRiZmQ4NWRiNzIzMTkzYzZjNzIzNyIsIm5iZiI6MTcyMDY4NjM4NC4zNDA4NDMsInN1YiI6IjY0ODY5ZjgxYzAzNDhiMDEzYzFkNTY3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8nZDXY863GKt7_CATDZ3yE7-iRn13pQ9Xpnzb3q3rB8",
  },
  //options: 요청하는 옵션사항들 정의해주는곳
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (movie_id) =>
  fetch(url(`movie/${movie_id}`), options).then((res) => res.json());

// fetch는 url , options 의 정보를 요청해서 요청받아옴
// fetch는 함수 사용할때 fetch()
