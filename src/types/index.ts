import { ButtonProps } from "@/components/ui/Button";

export type Buttons = {
  label: string;
  url: string;
  newTab: boolean;
  size: ButtonProps["size"];
  variant: ButtonProps["variant"];
};
