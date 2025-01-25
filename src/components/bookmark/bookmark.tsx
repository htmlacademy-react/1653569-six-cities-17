import cx from 'classix';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';
import { redirectToRoute } from '../../store/action';
import { FC, memo } from 'react';

type TBookmarkProps = {
  className?: string;
  width?: number;
  height?: number;
  isFavorite?: boolean;
}

export default function Bookmark({ className, width, height, isFavorite = false }: TBookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorizationStatus);

  const handleFavoriteClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button
      className={cx(`${className}__bookmark-button`, isFavorite && `${className}__bookmark-button--active`, 'button')}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export const MemoizedBookmark = memo(Bookmark) as FC<TBookmarkProps>;
