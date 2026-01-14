import styled from "@emotion/styled";
import type { ReactNode } from "react";
import type React from "react";
interface MyButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));
const MyButton: React.FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default MyButton;
