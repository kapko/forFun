import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Registration from "@/pages/auth/registration/registration";
import SignIn from "@/pages/auth/signIn/signIn";
import { Paths } from "@/routers/paths";

export const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <div>Hello World!</div>,
  },
  {
    path: Paths.SIGN_UP,
    element: <Registration/>,
  },
  {
    path: Paths.SIGN_IN,
    element: <SignIn/>,
  },
]);
