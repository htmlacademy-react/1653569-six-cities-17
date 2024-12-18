import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { City, MarkType, PageType } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';

type TFavoritesListProps = {
  places: Partial<Record<TTypeAs<typeof City>, TPlaceCard[]>>;
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
                  <Link className="locations__item-link" to="#">
                    <span>{city}</span>
                  </Link>
                </div>
              </div>

              <div className="favorites__places">
                {
                  cityPlaces.map((place) => (
                    <PlaceCard
                      key={place.title}
                      place={place}
                      markType={MarkType.Small}
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
