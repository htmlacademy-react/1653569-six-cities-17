import { Helmet } from 'react-helmet-async';
import { FormEvent, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, AuthStatus, LogoType } from '../../utils/consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginAction } from '../../store/api-actions';
import { TTypeAs } from '../../types/helper';

type TAuthStatus = {
  authStatus: TTypeAs<typeof AuthStatus>;
}

export default function LoginPage({ authStatus }: TAuthStatus): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));

      navigate(AppRoute.Main);
    }
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities - Login</title>
      </Helmet>

      <Header
        logoType={LogoType.Header}
        isAuth={false}
      />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={emailRef}
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
