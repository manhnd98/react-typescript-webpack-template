import { ReactNode } from "react";

export interface ButtonProps {
  onClick?: () => void;
  startIcon?: string;
  endIcon?: string;
  children?: ReactNode;
}
