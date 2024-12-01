import { Link } from 'react-router-dom';
import { City } from '../../utils/consts';

type TPlacesTabsProps = {
  activeTab: string;
}

export default function PlacesTabs({ activeTab }: TPlacesTabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((city) => (
              <li className="locations__item" key={city}>
                <Link className={`locations__item-link tabs__item ${city === activeTab ? 'tabs__item--active' : ''}`} to="#">
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
