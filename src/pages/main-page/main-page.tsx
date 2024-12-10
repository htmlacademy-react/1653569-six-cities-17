import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import cx from 'classix';
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

const activeTab = City.Amsterdam;

export default function MainPage({ placeCards, placeFavorites, authStatus }: TMainPageProps): JSX.Element {
  const [activePlaceCardId, setActivePlaceCardId] = useState<string | null>(null);
  const cityPlaceCards = placeCards.filter((item) => item.city.name === activeTab);
  const isPlaces = !!placeCards.length;

  const handleActivePlaceCardId = (placeCardId: string | null) => {
    setActivePlaceCardId(placeCardId);
  };

  return (
    <div className={cx('page', 'page--gray page--main', !isPlaces && 'page__main--index-empty')}>
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
          <div className={cx('cities__places-container', 'container', !isPlaces && 'cities__places-container--empty')}>
            {
              isPlaces
                ?
                <PlacesContainer
                  cityPlaceCards={cityPlaceCards}
                  activeTab={activeTab}
                  onActivePlaceCardId={handleActivePlaceCardId}
                />
                : <PlacesEmpty />
            }

            <div className="cities__right-section">
              {isPlaces &&
                <Map
                  cityPlaceCards={cityPlaceCards}
                  activePlaceCardId={activePlaceCardId}
                  mapType={MapType.Main}
                />}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
