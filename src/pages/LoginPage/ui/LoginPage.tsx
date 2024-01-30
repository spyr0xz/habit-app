import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginPage.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";

interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginPage, {}, [className])}>
      <h1 className={cls.title}>Habit App</h1>
      <div className={cls.dialog}>
        <div className={cls.content}>
          <div className={cls.inputWrapper}>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
          </div>
          <div className={cls.descr}>
            <p>
              {t('Don’t have an account?')} <span>Sign Up</span>
            </p>
            <p>
              {t('Forgot password?')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
