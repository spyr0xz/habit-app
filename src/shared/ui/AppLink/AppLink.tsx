import { FC } from "react";
import { Link, LinkProps, NavLink } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkVariant {
  PRIMARY = "primary",
  NAV = "nav",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    variant = "primary",
    activeClassName = "",
    ...otherProps
  } = props;

  if (variant === AppLinkVariant.PRIMARY) {
    return (
      <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [className])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
