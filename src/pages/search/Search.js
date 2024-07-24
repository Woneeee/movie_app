import { useForm } from "react-hook-form";
import { Title } from "../../components/Title";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { spacing } from "../../GlobalStyled";
import { searchMovie } from "../../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { w500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  padding: 150px ${spacing.size};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.h4`
  color: gold;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); //함수임
  row-gap: 30px;
  column-gap: 15px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 500px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    // console.log(keyword);

    const { results } = await searchMovie(keyword);
    setSearchData(results);
    setIsLoading(false);
  };

  // console.log(searchData);
  // console.log(isLoading);

  return (
    <Container>
      <Title titleName={"SEARCH"} />

      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해 주세요😊",
          })}
          type="text"
          placeholder="검색 내용 입력.."
        />
        <button>
          <FaSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {searchData?.length === 0 ? (
        "검색 결과 없음"
      ) : (
        <>
          {searchData && (
            <ConWrap>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {searchData.map((data) => (
                    <Con key={data.id}>
                      <Link to={`/detail/${data.id}`}>
                        <Bg>
                          <img
                            src={w500_URL + data.poster_path}
                            alt={data.title}
                          />
                        </Bg>
                      </Link>
                    </Con>
                  ))}
                </>
              )}
            </ConWrap>
          )}
        </>
      )}
    </Container>
  );
};

// undefined error: loading 옵셔널체이닝 &&
// flex-wrap: wrap; 하면 나오긴함
// background 단점: 검색이안됨 alt 없음
