import { useForm } from "react-hook-form";
import { Title } from "../../components/Title";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { spacing } from "../../GlobalStyled";
import { useEffect } from "react";
import { searchMovie } from "../../api";

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
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    // console.log(keyword);

    const result = await searchMovie(keyword);
    console.log(result);
  };

  return (
    <Container>
      <Title titleName={"SEARCH"} />

      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색내용을 입력해 주세요😊",
          })}
          type="text"
          placeholder="검색 내용 입력.."
        />
        <button>
          <FaSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>
    </Container>
  );
};
