import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  border-top: 1px solid #555;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const Footer = () => {
  return <Container>&copy; Woneeee 2024</Container>;
};
