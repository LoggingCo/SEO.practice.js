import { lazy } from 'react';
const LoginPage = lazy(() => import('pages/login'));
const MyPage = lazy(() => import('pages/myinfo'));
const TodoPage = lazy(() => import('pages/todo'));

const Routing = () => [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />,
  },
];
export default Routing;
