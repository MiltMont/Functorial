import styled from "styled-components";
import { base } from "../../utils/base";
import Image from "next/image";
import Layout from "../../components/Layout";

const S = {
  Container: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      border: 1px solid ${(p) => p.theme.colors.accent3};
      border-radius: ${(p) => p.theme.borderRadius[2]};

      background-color: ${(p) => p.theme.colors.background};
    }
  `,

  Root: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      background-color: ${(p) => p.theme.colors.accent1};
      padding: ${base(1 / 2)};
    }
  `,

  ArticleImage: styled(Image)`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      border-radius: ${(p) => p.theme.borderRadius[2]};
    }
  `,

  ImageContainer: styled(Layout.Container)`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      padding: 100px;
      background-color: ${(p) => p.theme.colors.accent1};
      border: 10px solid ${(p) => p.theme.colors.accent3};
      margin: 0;
    }
  `,
};

export default S;
