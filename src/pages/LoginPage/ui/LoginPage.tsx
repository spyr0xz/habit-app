import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginPage.module.scss'
import bg from 'shared/assets/images/auth-bg.jpg'

interface LoginPageProps {
  className?: string;
}


const LoginPage = ({className}: LoginPageProps) => {
  return (
    <div className={classNames(cls.LoginPage, {}, [className])}>
      <div className={cls.modal}>
      <img src={bg} alt="" />
      MODAL MODAL
      </div>
    </div>
  )
}

export default LoginPage