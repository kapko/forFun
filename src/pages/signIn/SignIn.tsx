import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Card} from "antd";
import InputComponent from "../../common/components/Input/Input";
import './signIn.styles.scss';

import { AuthScheme } from "../../common/validations/authScheme";
import { Typography } from 'antd';
import { useAuthStore } from "../../auth/auth.store";
import { AuthData } from "./type";
import AlertInfo from "../../common/components/AlertInfo/AletInfo";
import { Paths } from "../../routers/paths";
const { Title } = Typography;

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthData>({
    resolver: yupResolver(AuthScheme)
  });

  const { error, submit } = useAuthStore();

  const onLoginSubmit = async (data: AuthData) => {
    await submit(data);
  };

  return (
    <div className="container">
      <div className="auth">
        <Card className='card'>
          <Title className='title' level={2}>Вход</Title>
          <form className="auth__form" onSubmit={handleSubmit(onLoginSubmit)}>
            <InputComponent
              control={control}
              name="username"
              placeholder="Email"
              type="email"
              errors={errors.username?.message}
              label="Почта"
            />
            <InputComponent
              control={control}
              name="password"
              placeholder="Пароль"
              type="password"
              errors={errors.password?.message}
              label="Пароль"
            />
            {error && <AlertInfo error={error}/>}
            <Link to={Paths.SIGN_UP} className='auth__link'>У вас еще нет учетной записи? <span className='link'>Зарегистрируйтесь сейчас</span></Link>
            <Button type="primary" htmlType="submit"><Title level={5}>Войти</Title></Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;