import * as ToastComponent from "@radix-ui/react-toast";
import { useState, FC } from "react";
import theme from "../../styles/Theme";
import Icon from "./Icon";
import Button from "../Button";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  variant?: "standard" | "success" | "warning" | "error";
  fill?: "fill" | "outline";
  onClick?: () => void;
};

const Toast: FC<Props> = ({
  title = "Notification",
  description,
  children,
  variant = "standard",
  fill = "fill",
  onClick,
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

      <ToastComponent.Root
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.foreground,
          padding: theme.space[1],

          margin: theme.space[1],
          borderRadius: theme.borderRadius[2],
          border: `1px solid ${theme.colors.accent3}`,
          display: "grid",
          gridTemplateAreas: ` 'title action' 'description action'`,
          gridTemplateColumns: "auto max-content",
          columnGap: theme.space[1],
          alignItems: "center",
        }}
        open={open}
        onOpenChange={setOpen}
      >
        <ToastComponent.Title
          style={{
            gridArea: "title",
            fontWeight: theme.fontWeight[4],
            fontSize: theme.fontSize[3],
          }}
          className="ToastTitle"
        >
          {title}
        </ToastComponent.Title>
        <ToastComponent.Description
          style={{
            gridArea: "description",
            color: theme.colors.accent3,
            fontSize: theme.fontSize[2],
          }}
          asChild
        >
          {description && <p>{description}</p>}
        </ToastComponent.Description>
        <ToastComponent.Action
          style={{ gridArea: "action" }}
          asChild
          altText="Goto schedule to undo"
        >
          <button
            style={{
              all: "unset",
              border: `2px solid ${theme.colors.foreground}`,
              borderRadius: theme.borderRadius[1],
            }}
          >
            <Icon icon="close" color={theme.colors.foreground} size={20} />
          </button>
        </ToastComponent.Action>
      </ToastComponent.Root>
      <ToastComponent.Viewport
        className="ToastViewport"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0",

          position: "fixed",
          bottom: 0,
          right: 0,

          fontSize: theme.fontSize[2],

          listStyle: "none",
          outline: "none",
          maxWidth: "100vw",
        }}
      />
    </>
  );
};

export default Toast;
