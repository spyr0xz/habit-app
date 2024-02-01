import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginPage.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useState } from "react";

interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
  const { t } = useTranslation();
  const [isSignedUp, setIsSignedUp] = useState<Boolean>(true);
  const isSignedHandler = () => {
    setIsSignedUp((prev) => !prev);
  };

  return (
    <div className={classNames(cls.LoginPage, {}, [className])}>
      <h1 className={cls.title}>Habit App</h1>
      <div className={cls.dialog}>
        <div className={cls.content}>
          {isSignedUp ? (
            <div className={cls.inputWrapper}>
              <Input placeholder={t("Username")} />
              <Input type="password" placeholder={t("Password")} />
            </div>
          ) : (
            <div className={cls.inputWrapper}>
              <Input placeholder={t("Email")} />
              <Input type="password" placeholder={t("New password")} />
              <Input type="password" placeholder={t("Re-enter password")} />
            </div>
          )}

          <div className={cls.descr}>
            <p>
              {isSignedUp
                ? `${t("Don’t have an account?")} `
                : `${t("Already have an account?")} `}
              <span onClick={isSignedHandler} className={cls.signBtn}>
                {isSignedUp ? t("Create an account") : t("Login")}
              </span>
            </p>
            <p>{t("Forgot password?")}</p>
          </div>
          <Button className={cls.button} theme={ButtonTheme.PRIMARY}>
            {isSignedUp ? t("Login") : t("Sign Up")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
