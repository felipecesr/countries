import * as React from "react";
import * as S from "./styled";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <S.Wrapper ref={ref} type="button" {...props}>
        {children}
      </S.Wrapper>
    );
  }
);

Button.displayName = "Button";

export default Button;
