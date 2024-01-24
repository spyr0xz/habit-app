import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { AppRoutes, routePath } from "shared/config/routeConfig/routeConfig";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, {}, [className])}>
      <div className={cls.logo}>
        <p>Logo</p>
      </div>
      <div className={classNames(cls.items, {}, [className])}>
        <AppLink
          variant={AppLinkVariant.NAV}
          activeClassName={cls.active}
          className={classNames(cls.item, {}, [className])}
          to={routePath.main}
          onClick={onClickHandler}
        >
          <span>{t("Habits")}</span>
        </AppLink>
        <AppLink
          variant={AppLinkVariant.NAV}
          activeClassName={cls.active}
          className={cls.item}
          to={routePath.todos}
        >
          <span>{t("Todo List")}</span>
        </AppLink>
        <AppLink
          variant={AppLinkVariant.NAV}
          activeClassName={cls.active}
          className={cls.item}
          to={routePath.analytics}
        >
          <span>{t("Analytics")}</span>
        </AppLink>
        <AppLink
          variant={AppLinkVariant.NAV}
          activeClassName={cls.active}
          className={cls.item}
          to={routePath.settings}
        >
          <span>{t("Settings")}</span>
        </AppLink>
      </div>
    </div>
  );
};
