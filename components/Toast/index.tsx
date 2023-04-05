import { S } from "./css";
import { useState, FC } from "react";
import theme from "../../styles/Theme";
import Icon from "../utils/Icon";
import Button from "../Button";

export type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  variant?: "standard" | "success" | "warning" | "error";
  fill?: "fill" | "outline";
  altText: string;
  onClick?: () => void;
  action?: "close" | "none";
};

const Toast: FC<Props> = ({
  title = "Notification",
  description,
  children,
  variant = "standard",
  fill = "fill",
  altText = "Notification",
  onClick,
  action = "none",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
          onClick();
        }}
        variant={variant}
        fill={fill}
      >
        {children}
      </Button>

      <S.Root open={open} onOpenChange={setOpen}>
        <S.Title>{title}</S.Title>
        <S.Description asChild>
          {description && <p>{description}</p>}
        </S.Description>
        {action === "close" && (
          <S.Action altText={altText} asChild>
            <button
              style={{
                all: "unset",
                border: `2px solid ${theme.colors.accent6}`,
                borderRadius: theme.borderRadius[1],
              }}
            >
              <Icon icon="close" color={theme.colors.accent6} size={20} />
            </button>
          </S.Action>
        )}
      </S.Root>
      <S.Viewport />
    </>
  );
};

export default Toast;
