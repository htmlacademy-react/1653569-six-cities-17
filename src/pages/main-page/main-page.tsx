import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import PlacesTabs from '../../components/places-tabs/places-tabs';
import PlacesContainer from '../../components/places-container/places-container';
import PlacesEmpty from '../../components/places-empty/places-empty';
import Map from '../../components/map/map';
import { City, LogoType, MapType, PageType } from '../../utils/consts';
import { AuthStatus } from '../../utils/consts';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helpers';

type TMainPageProps = {
  placeCards: TPlaceCard[];
  placeFavorites: TPlaceCard[];
  authStatus: TTypeAs<typeof AuthStatus>;
}

const activeTab = City.Paris;

export default function MainPage({ placeCards, placeFavorites, authStatus }: TMainPageProps): JSX.Element {
  const isPlaces = !!placeCards.length;

  return (
    <div className={`page page--gray page--main ${!isPlaces ? 'page__main--index-empty' : ''}`}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header
        placeFavorites={placeFavorites}
        authStatus={authStatus}
        pageType={PageType.Main}
        logoType={LogoType.Header}
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <PlacesTabs activeTab={activeTab}/>

        <div className="cities">
          <div className={`cities__places-container container ${!isPlaces ? 'cities__places-container--empty' : ''}`}>
            {
              isPlaces
                ?
                <PlacesContainer
                  placeCards={placeCards.filter((item) => item.city.name === activeTab)}
                  activeTab={activeTab}
                />
                : <PlacesEmpty />
            }

            <div className="cities__right-section">
              {isPlaces && <Map mapType={MapType.Main} />}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
