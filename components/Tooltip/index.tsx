import { FC } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled from "styled-components";
import { base } from "../../utils/base";

type Props = {
  children: React.ReactNode;
  content: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
};

const Tooltip: FC<Props> = ({
  children,
  content,
  open,
  onOpenChange,
  defaultOpen,
}) => {
  return (
    <S.Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <S.Trigger asChild>{children}</S.Trigger>
      <S.Content side="right" align="center">
        {content}
        <S.Arrow width={11} height={base(1 / 2)} />
      </S.Content>
    </S.Root>
  );
};

export default Tooltip;

const S = {
  Root: styled(TooltipPrimitive.Root)``,
  Trigger: styled(TooltipPrimitive.Trigger)``,

  Content: styled(TooltipPrimitive.Content)`
    border-radius: ${(p) => p.theme.borderRadius[2]};
    padding: ${base(1 / 2)};
    font-size: ${(p) => p.theme.fontSize[2]};
    color: ${(p) => p.theme.colors.accent7};
    background-color: ${(p) => p.theme.colors.background};
    user-select: none;

    border: 1px solid ${(p) => p.theme.colors.accent3};
  `,
  Arrow: styled(TooltipPrimitive.Arrow)``,
};
