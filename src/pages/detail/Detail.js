import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { movieDetail } from "../../api";

export const Detail = () => {
  const [detail, setDetail] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(1022789);

        setDetail(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detail);

  return (
    <div>
      <Title titleName={"DETAIL"} />
      Detail
    </div>
  );
};
