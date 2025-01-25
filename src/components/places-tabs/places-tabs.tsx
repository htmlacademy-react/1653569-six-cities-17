import cx from 'classix';
import { Link } from 'react-router-dom';
import { City } from '../../utils/consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeCity } from '../../store/places/places.slice';
import { memo, useCallback } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectActiveCity } from '../../store/places/places.selectors';
import { TTypeAs } from '../../types/helper';

function PlacesTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(selectActiveCity);

  const handleCityClick = useCallback((evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (evt.currentTarget.textContent) {
      dispatch(changeCity(evt.currentTarget.textContent as TTypeAs<typeof City>));
    }
  }, [dispatch]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((city) => (
              <li className="locations__item" key={city}>
                <Link
                  className={cx('locations__item-link', 'tabs__item', city === activeCity && 'tabs__item--active')}
                  to="#"
                  onClick={handleCityClick}
                >
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

const MemoizedPlacesTabs = memo(PlacesTabs);
export default MemoizedPlacesTabs;
