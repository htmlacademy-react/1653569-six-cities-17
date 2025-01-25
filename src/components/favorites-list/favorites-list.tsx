import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { AppRoute, CARD_STYLES, City, MarkType, PageType} from '../../utils/consts';
import { getStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';
import { memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../store/places/places.slice';

type TFavoritesListProps = {
  places: Partial<Record<TTypeAs<typeof City>, TPlaceCard[]>>;
}

function FavoritesList({ places }: TFavoritesListProps): JSX.Element {
  const mapStyle = useMemo(() => getStyles(PageType.Favorites, CARD_STYLES), []);
  const dispatch = useDispatch();

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {
          Object.entries(places).map(([city, cityPlaces]) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link
                    className="locations__item-link"
                    to={AppRoute.Main}
                    onClick={() => dispatch(changeCity(city as TTypeAs<typeof City>))}
                  >
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
                      pageType={PageType.Favorites}
                      {...mapStyle}
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

const MemoizedFavioritesList = memo(FavoritesList);
export default MemoizedFavioritesList;
