import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const {t, i18n} = useTranslation()
  
  return (
    <div className={classNames(cls.Sidebar, {}, [className])}>
      <div className={cls.logo}>
        <p>Logo</p>
      </div>
      <div className={cls.items}>
      <AppLink className={cls.item} to={routePath.main}>
        <span>{t('Habits')}</span>
      </AppLink>
      <AppLink className={cls.item} to={routePath.todos}>
        <span>{t('Todo List')}</span>
      </AppLink>
      <AppLink className={cls.item} to={routePath.analytics}>
        <span>{t('Analytics')}</span>
      </AppLink>
      <AppLink className={cls.item} to={routePath.settings}>
        <span>{t('Settings')}</span>
      </AppLink>
      </div>
    </div>
  )
}
