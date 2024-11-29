import PlaceCard from '../../components/place-card/place-card';
import { TPlaceCard } from '../../types/place-card';
import { PageType } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';

type TCities = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
type TFavoritesListProps = {
  places: Partial<Record<TCities, TPlaceCard[]>>;
}

export default function FavoritesList({ places }: TFavoritesListProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {
          Object.entries(places).map(([city, cityPlaces]) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>

              <div className="favorites__places">
                {
                  cityPlaces.map((place) => (
                    <PlaceCard
                      key={place.title}
                      place={place}
                      {...getPlaceCardStyles(PageType.Favorites)}
                    />
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
