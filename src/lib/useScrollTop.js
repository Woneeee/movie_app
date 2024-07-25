import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      //   behavior: "smooth",
    });
  }, [pathname]);

  return;
};

// *useEffect
// =>렌더링 전에 작동, 렌더링 후 작동, 특정값만 변경, 수정 할때
// =>[] 안의 내용이 변경될때마다 useEffect 안의 식이 다시 작동
