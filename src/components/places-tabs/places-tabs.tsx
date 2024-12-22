import cx from 'classix';
import { Link } from 'react-router-dom';
import { City } from '../../utils/consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeCity } from '../../store/action';
import { TTypeAs } from '../../types/helper';

type TPlacesTabsProps = {
  activeCity: TTypeAs<typeof City>;
}

export default function PlacesTabs({ activeCity }: TPlacesTabsProps): JSX.Element {
  const dispatch = useAppDispatch();

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
                  onClick={() => dispatch(changeCity(city))}
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
