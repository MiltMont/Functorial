import styled from "styled-components";
import Icon from "../utils/Icon";
import { base } from "../../utils/base";

const S = {
  Input: styled.input`
    height: 100%;
    width: 100%;
    padding: ${base(1 / 2)};
    border: none;
    border-radius: 0 ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} 0;
    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.accent7};

    &:focus {
      outline: none;
    }
  `,

  Label: styled.div`
    padding: ${base(1 / 2)};
    border-radius: ${(p) => p.theme.borderRadius[2]} 0 0
      ${(p) => p.theme.borderRadius[2]};
    border-right: 1px solid ${(p) => p.theme.colors.accent3};
  `,

  Container: styled.div`
    display: flex;
    align-items: center;
    align-content: stretch;
    background-color: ${(p) => p.theme.colors.accent1};

    border: 1px solid ${(p) => p.theme.colors.accent3};
    border-radius: ${(p) => p.theme.borderRadius[2]};
  `,
};

const SearchBar = () => {
  return (
    <S.Container>
      <S.Label>
        <Icon icon="search" />
      </S.Label>
      <S.Input type="text" placeholder="Search for an article." />
    </S.Container>
  );
};

export default SearchBar;
