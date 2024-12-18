import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AppRoute, AuthStatus, LogoType } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';
import { TPlaceCard } from '../../types/place-card';

type TNotFoundPageProps = {
  placeFavorites: TPlaceCard[];
  authStatus: TTypeAs<typeof AuthStatus>;
}

export default function NotFoundPage({ placeFavorites, authStatus }: TNotFoundPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities - Page 404</title>
      </Helmet>

      <Header
        placeFavorites={placeFavorites}
        authStatus={authStatus}
        logoType={LogoType.Header}
      />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page 404</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404</b>
              <b className="favorites__status">Page not found</b>
              <p><Link to={AppRoute.Main}>Вернуться на главную</Link></p>
            </div>
          </section>
        </div>
      </main>

      <Footer
        isContainer={false}
        logoType={LogoType.Footer}
      />
    </>
  );
}
