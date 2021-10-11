import { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <StyledContainer>
      <StyledImg height={160} width={160} src={image} alt="プロフィール画像" />
      <StyledName>{name}</StyledName>
      {isAdmin && <span>編集</span>}
    </StyledContainer>
  );
});

const StyledContainer = styled.div`
  text-align: center;
`;
const StyledImg = styled.img`
  border-radius: 50%;
`;
const StyledName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
