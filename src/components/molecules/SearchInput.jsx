import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  return (
    <StyledContainer>
      <Input placeholder="検索条件を入力" />
      <StyledButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </StyledButtonWrapper>
    </StyledContainer>
  );
});

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonWrapper = styled.div`
  padding-left: 8px;
`;
