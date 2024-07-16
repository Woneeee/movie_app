import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";

const Container = styled.div`
  padding: 20px ${spacing.size};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Menu = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};
