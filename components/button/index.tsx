import React from 'react';
import cx from 'classnames';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'primary' | 'secondary' | 'outline' | 'plain' | 'white';

interface IButtonProps {
  size?: ButtonSize;
  style?: ButtonType;
  children: React.ReactNode;
  className?: string;
  submit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  onClick?: () => void;
}

type TBoxProps = IButtonProps & React.HTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, TBoxProps>(
  (
    {
      style = 'primary',
      size = 'md',
      children,
      submit = false,
      disabled = false,
      loading = false,
      className,
      rounded,
      onClick
    },
    ref
  ) => (
    <button
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      className={cx(
        'button',
        `button-${size}`,
        `button-${style}`,
        loading && 'button-loading',
        rounded && 'button-rounded',
        className
      )}
      onClick={() => (onClick ? onClick() : false)}
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button"

export default Button;
