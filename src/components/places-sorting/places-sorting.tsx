import cx from 'classix';
import { SortOption } from '../../utils/consts';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { changeSorting } from '../../store/places/places.slice';
import { selectActiveSort } from '../../store/places/places.selectors';

export default function PlacesSorting(): JSX.Element {
  const [isSortingOpened, setSortingOpened] = useState<boolean>(false);
  const sortRef = useRef<HTMLElement>(null);
  const activeSort = useAppSelector(selectActiveSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const closedSorting = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortRef.current && !sortRef.current.contains(evt.target)) {
        setSortingOpened(false);
      }
    };
    document.addEventListener('click', closedSorting);

    return () => {
      document.removeEventListener('click', closedSorting);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortingOpened((status) => !status)}
        ref={sortRef}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={cx('places__options', 'places__options--custom', isSortingOpened && 'places__options--opened')}>
        {
          Object.values(SortOption).map((option) => (
            <li
              className={cx('places__option', option === activeSort && 'places__option--active')}
              tabIndex={0}
              key={option}
              onClick={() => dispatch(changeSorting(option))}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
