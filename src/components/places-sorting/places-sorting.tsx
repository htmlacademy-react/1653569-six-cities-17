import { SORT_OPTIONS } from '../../utils/consts';

export default function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className="places__options places__options--custom places__options--opened">
        {
          SORT_OPTIONS.map((option) => (
            <li
              className="places__option places__option--active"
              tabIndex={0}
              key={option}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
