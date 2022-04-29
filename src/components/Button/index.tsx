import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum type {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: type;
  href?: string;
  children: React.ReactNode;
}
const Button: React.FC<BaseButtonProps> = (props) => {
  const { className, disabled, size, btnType, href, children } = props
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType, // 当传入了 btnType 为 lg 时，添加类名 btn-lg
    [`btn-${size}`]: size,
    'disabled': btnType === type.Link && disabled,
  }
  )
  if (btnType === type.Link && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  } else {
    return (
      <div>
        <button className={classes} disabled={disabled}>
          {children}
        </button>
      </div>
    )
  }

}
Button.defaultProps = {
  disabled: false,
  btnType: type.Default
}
export default Button