import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import cx from 'classix';
import Header from '../../components/header/header';
import PlacesTabs from '../../components/places-tabs/places-tabs';
import PlacesContainer from '../../components/places-container/places-container';
import PlacesEmpty from '../../components/places-empty/places-empty';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/use-app-selector';
import { LogoType, MapType, PageType } from '../../utils/consts';

export default function MainPage(): JSX.Element {
  const [activePlaceCardId, setActivePlaceCardId] = useState<string | null>(null);
  const activeCity = useAppSelector((state) => state.activeCity);
  const placeCards = useAppSelector((state) => state.placeCards);

  const cityPlaceCards = placeCards.filter((place) => place.city.name === activeCity);
  const hasPlaces = !!cityPlaceCards.length;

  const handleActivePlaceCardId = (placeCardId: string | null) => {
    setActivePlaceCardId(placeCardId);
  };

  return (
    <div className={cx('page', 'page--gray page--main', !hasPlaces && 'page__main--index-empty')}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header
        pageType={PageType.Main}
        logoType={LogoType.Header}
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <PlacesTabs activeCity={activeCity}/>

        <div className="cities">
          <div className={cx('cities__places-container', 'container', !hasPlaces && 'cities__places-container--empty')}>
            {
              hasPlaces
                ?
                <PlacesContainer
                  cityPlaceCards={cityPlaceCards}
                  activeCity={activeCity}
                  onActivePlaceCardId={handleActivePlaceCardId}
                />
                : <PlacesEmpty activeCity={activeCity} />
            }

            <div className="cities__right-section">
              {hasPlaces &&
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
