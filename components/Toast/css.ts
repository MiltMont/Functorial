import styled from "styled-components";
import theme from "../../styles/Theme";
import * as ToastComponent from "@radix-ui/react-toast";

export const S = {
  Root: styled(ToastComponent.Root)`
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
    padding: ${theme.space[1]};
    margin: ${theme.space[1]};
    border-radius: ${theme.borderRadius[2]};
    border: 1px solid ${theme.colors.accent3};
    display: grid;
    grid-template-areas: "title action" "description action";
    grid-template-columns: auto max-content;
    column-gap: ${theme.space[1]};
    align-items: center;
  `,
  Viewport: styled(ToastComponent.Viewport)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;

    position: fixed;
    bottom: 0;
    left: 0;

    font-size: ${theme.fontSize[2]};
    list-style: none;
    outline: none;
    max-width: 100vw;
  `,

  Title: styled(ToastComponent.Title)`
    grid-area: title;
    font-weight: ${theme.fontWeight[4]};
    font-size: ${theme.fontSize[3]};
  `,

  Description: styled(ToastComponent.Description)`
    grid-area: description;
    color: ${theme.colors.accent6};
    font-size: ${theme.fontSize[2]};
  `,

  Action: styled(ToastComponent.Action)`
    grid-area: action;
  `,
};
