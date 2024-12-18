import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classix';
import { City } from '../../utils/consts';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/action';

type TPlacesTabsProps = {
  activeTab: string;
}

export default function PlacesTabs({ activeTab }: TPlacesTabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleTabClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (evt.currentTarget.dataset.city) {
      dispatch(setActiveCity((evt.currentTarget).dataset.city));
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((city) => (
              <li className="locations__item" key={city}>
                <Link
                  className={cx('locations__item-link', 'tabs__item', city === activeTab && 'tabs__item--active')}
                  to="#"
                  data-city={city}
                  onClick={handleTabClick}
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
