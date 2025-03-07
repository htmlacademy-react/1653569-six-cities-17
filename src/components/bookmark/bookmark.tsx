import cx from 'classix';
import { memo } from 'react';
import { redirectToRoute } from '../../store/action';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { changeFavoritesAction } from '../../store/api-actions';
import { updatePlaceCard } from '../../store/places/places.slice';
import { updateNearbyCards } from '../../store/nearby/nearby.slice';
import { updateOfferCard } from '../../store/offer/offer.slice';
import { TOfferCard } from '../../types/offer-card';
import { TPlaceCard } from '../../types/place-card';

type TBookmarkProps = {
  className?: string;
  width?: number;
  height?: number;
  offer: TPlaceCard | TOfferCard;
  isFavorite?: boolean;
}

function Bookmark({ className, width, height, offer, isFavorite = false }: TBookmarkProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    dispatch(changeFavoritesAction({ offerId: offer.id, status: isFavorite ? 0 : 1 }))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(updatePlaceCard(offer.id));
          dispatch(updateNearbyCards(offer.id));
          dispatch(updateOfferCard(offer.id));
        }
      });
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

const MemoizedBookmark = memo(Bookmark);
export default MemoizedBookmark;
