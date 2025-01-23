import { Helmet } from 'react-helmet-async';
import { FormEvent, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus, City, LogoType } from '../../utils/consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginAction } from '../../store/api-actions';
import { changeCity } from '../../store/places/places.slice';
import { TTypeAs } from '../../types/helper';

type TAuthStatus = {
  authStatus: TTypeAs<typeof AuthorizationStatus>;
}

export default function LoginPage({ authStatus }: TAuthStatus): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomCity = Object.values(City)[Math.floor(Math.random() * Object.keys(City).length)];
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  if (authStatus === AuthorizationStatus.Auth) {
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
                  pattern='^.*(?=.*[a-zа-яё])(?=.*\d).*$'
                  title='The password must consist of at least one letter and one number'
                  required
                  ref={passwordRef}
                />
              </div>

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => dispatch(changeCity(randomCity))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
