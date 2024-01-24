import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, children, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
