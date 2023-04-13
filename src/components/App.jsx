import { Layout } from './Layout';

import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from './hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/SignUp'));
const LoginPage = lazy(() => import('../pages/SignIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // let mouseX = 0;
  // let mouseY = 0;

  // document.addEventListener('mousemove', function (e) {
  //   mouseX = e.clientX;
  //   mouseY = e.clientY;
  // });

  // function updateBackgroundPosition() {
  //   let bg = document.querySelector('body');
  //   bg.style.backgroundPositionX =
  //     (mouseX - window.innerWidth / 2) * 0.02 + 'px';
  //   bg.style.backgroundPositionY =
  //     (mouseY - window.innerHeight / 2) * 0.02 + 'px';
  //   requestAnimationFrame(updateBackgroundPosition);
  // }

  // updateBackgroundPosition();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
