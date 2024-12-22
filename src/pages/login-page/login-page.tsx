import { Helmet } from 'react-helmet-async';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, AuthStatus, AuthUser, LogoType } from '../../utils/consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loadAuthStatus, loadAuthUser } from '../../store/action';
import { TAuthUser } from '../../types/user';
import authApiService from '../../service/auth-api-service';

export default function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<TAuthUser>(AuthUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        email: evt.target.value
      });
    }
  };

  const handleInputPasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        password: evt.target.value
      });
    }
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData && formData.email && formData.password) {
      authApiService.setAuthStatus(AuthStatus.Auth);
      authApiService.setAuthUser(formData);
      dispatch(loadAuthStatus(authApiService.authStatus));
      dispatch(loadAuthUser(authApiService.authUser));
      navigate(AppRoute.Main);
    }
  };

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

            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={handleInputEmailChange}/>
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={handleInputPasswordChange}/>
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
