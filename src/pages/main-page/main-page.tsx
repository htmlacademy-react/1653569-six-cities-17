import Header from '../../components/header/header';
import PlacesTabs from '../../components/places-tabs/places-tabs';
import PlacesContainer from '../../components/places-container/places-container';
import PlacesEmpty from '../../components/places-empty/places-empty';
import Map from '../../components/map/map';
import { PageType } from '../../utils/consts';
import { TPlaceCard } from '../../types/place-card';

type TMainPageProps = {
  placeCards: TPlaceCard[];
}

export default function MainPage({ placeCards }: TMainPageProps): JSX.Element {
  const isPlaces = !!placeCards.length;

  return (
    <div className={`page page--gray page--main ${!isPlaces ? 'page__main--index-empty' : ''}`}>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <PlacesTabs />

        <div className="cities">
          <div className={`cities__places-container container ${!isPlaces ? 'cities__places-container--empty' : ''}`}>
            {
              isPlaces
                ? <PlacesContainer placeCards={placeCards.filter((item) => item.city.name === 'Amsterdam')} />
                : <PlacesEmpty />
            }

            <div className="cities__right-section">
              {isPlaces && <Map pageType={PageType.Main} />}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
