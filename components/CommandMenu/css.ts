import styled from "styled-components";
import { base } from "../../utils/base";

export const S = {
  Container: styled.div`
    [cmdk-root] {
      max-width: 640px;
      width: 100%;
      background: ${(p) => p.theme.colors.accent1};
      border: 1px solid ${(p) => p.theme.colors.accent3};
      border-radius: ${(p) => p.theme.borderRadius[2]};
      overflow: hidden;
      padding: 0;

      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    [cmdk-input] {
      border: none;
      width: 100%;
      font-size: ${(p) => p.theme.fontSize[3]};
      padding: ${(p) => p.theme.space[1]};
      outline: none;
      background: ${(p) => p.theme.colors.accent1};
      color: ${(p) => p.theme.colors.foreground};
      border-top: 1px solid ${(p) => p.theme.colors.accent3};
      border-radius: 0;
      caret-color: ${(p) => p.theme.colors.brand};
      margin: 0;

      &::placeholder {
        color: ${(p) => p.theme.colors.accent6};
      }
    }

    [cmdk-separator] {
      font-size: ${(p) => p.theme.fontSize[2]};
      color: ${(p) => p.theme.colors.accent5};
      font-weight: ${(p) => p.theme.fontWeight[4]};
      padding: 0 ${(p) => p.theme.space[1]} ${base(1 / 2)}
        ${(p) => p.theme.space[1]};
    }

    [cmdk-item] {
      content-visiblity: auto;

      cursor: pointer;
      height: ${(p) => p.theme.space[2]};
      font-size: ${(p) => p.theme.fontSize[3]};
      font-weight: ${(p) => p.theme.fontWeight[2]};

      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0 ${(p) => p.theme.space[1]};
      color: ${(p) => p.theme.colors.foreground};
      user-select: none;
      will-change: background, color;
      transition: all 150ms ease;
      transition-property: none;
      position: relative;

      &[data-selected="true"] {
        background: ${(p) => p.theme.colors.accent2};
        color: ${(p) => p.theme.colors.brand};

        &:after {
          position: absolute;
          left: 0;
          z-index: 123;
          width: 3px;
          height: 100%;
        }
      }

      &[data-disabled="true"] {
        color: ${(p) => p.theme.colors.accent4};
        cursor: not-allowed;
      }

      &:active {
        transition-property: background;
        background: ${(p) => p.theme.colors.accent3};
      }
    }

    [cmdk-list] {
      height: min(300px, 400px);
      max-height: 400px;
      overflow: auto;
      overscroll-behavior: contain;
    }

    [cmdk-empty] {
      font-size: ${(p) => p.theme.fontSize[3]};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      white-space: pre-wrap;
      color: ${(p) => p.theme.colors.accent5};
    }
  `,
};
