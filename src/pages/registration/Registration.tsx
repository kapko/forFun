import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Alert, Button, Card } from "antd";
import InputComponent from "../../common/components/Input/Input";
import './Registration.styles.scss';

import { FormValues, AuthProps } from "../signIn/type";
import { RegisterScheme } from "../../utils/authScheme";
import { Typography } from 'antd';
import { useRegisterStore } from "../../store/actions";
const { Title } = Typography;

const Registration = () => {
  const { error, email } = useRegisterStore();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  const onSubmit = async (data: FormValues) => {
    await email(data);
  };

  return (
    <div className='container'>
      <div className='register'>
        <Card className='card'>
          <Title className='title' level={2}>Регистрация</Title>
          <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
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
            <InputComponent
              control={control}
              name="confirmpassword"
              placeholder="Подтвердите пароль"
              type="password"
              errors={errors.confirmpassword?.message}
              label="Подтвердите пароль"
            />
            {error && <Alert message={error} type="error" />}
            <Link to={'/signIn'} className='register__link'>У вас уже есть аккаунт? <span className='link'>Войти</span></Link>
            <Button type="primary" htmlType="submit"><Title level={5}>Зарегистрироваться</Title></Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;