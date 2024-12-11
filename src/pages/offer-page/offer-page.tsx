import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferNearPlacesList from '../../components/offer-near-places-list/offer-near-places-list';
import NotFoundPage from '../not-found-page/not-found-page';
import { offerCards } from '../../mocks/offer-cards';
import { AuthStatus, CardCount, LogoType, MapType } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TCommentSend } from '../../types/comment';

type TOfferPageProps = {
  cityPlaceCards: TPlaceCard[];
  placeFavorites: TPlaceCard[];
  authStatus: TTypeAs<typeof AuthStatus>;
  onComment: (comment: TCommentSend) => void;
}

export default function OfferPage({ cityPlaceCards, placeFavorites, authStatus, onComment }: TOfferPageProps): JSX.Element {
  const params = useParams();
  const offer = offerCards.find((card) => card.id === params.id);
  const offerNearPlaces = cityPlaceCards.filter((place) => place.id !== params.id).slice(CardCount.Min, CardCount.Max);

  return (
    offer
      ?
      <div className="page">
        <Helmet>
          <title>6 cities - Offer</title>
        </Helmet>

        <Header
          placeFavorites={placeFavorites}
          authStatus={authStatus}
          logoType={LogoType.Header}
        />

        <main className="page__main page__main--offer">
          <section className="offer">
            <OfferGallery images={offer.images} />

            <div className="offer__container container">
              <div className="offer__wrapper">

                <OfferDescription offer={offer} />
                <OfferReviews
                  authStatus={authStatus}
                  onComment={onComment}
                />
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
      :
      <NotFoundPage
        placeFavorites={placeFavorites}
        authStatus={authStatus}
      />
  );
}
