import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferNearPlacesList from '../../components/offer-near-places-list/offer-near-places-list';
import NotFoundPage from '../not-found-page/not-found-page';
import { CardCount, LogoType, MapType } from '../../utils/consts';
import Loading from '../../components/spinner/spinner';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchPlaceCardsNearbyAction, fetchPlaceOfferAction, fetchPlaceOfferReviewsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/use-app-selector';

export default function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.placeOffer);
  const offerNearPlaces = useAppSelector((state) => state.placeCardsNearby).slice(CardCount.Min, CardCount.Max);
  const reviews = useAppSelector((state) => state.placeOfferReviews);
  const isOfferLoading = useAppSelector((state) => state.isPlaceOfferLoading);
  const isNearbyLoading = useAppSelector((state) => state.isPlaceCardsNearbyLoading);
  const isReviewsLoading = useAppSelector((state) => state.isPlaceOfferReviewsLoading);

  useEffect(() => {
    dispatch(fetchPlaceOfferAction(id as string));
    dispatch(fetchPlaceCardsNearbyAction(id as string));
    dispatch(fetchPlaceOfferReviewsAction(id as string));
  }, [id, dispatch]);

  if (isOfferLoading || isNearbyLoading || isReviewsLoading) {
    return <Loading />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>

      <Header
        logoType={LogoType.Header}
      />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">

              <OfferDescription offer={offer} />
              <OfferReviews reviews={reviews} />
            </div>
          </div>

          <Map
            cityPlaceCards={offerNearPlaces}
            currentOfferCard={offer}
            mapType={MapType.Offer}
          />
        </section>

        <div className="container">
          <OfferNearPlacesList offerNearPlaces={offerNearPlaces} />
        </div>
      </main>
    </div>
  );
}
