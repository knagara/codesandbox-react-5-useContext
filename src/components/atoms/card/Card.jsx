import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0 0 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
