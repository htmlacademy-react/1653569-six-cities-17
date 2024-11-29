import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferNearPlacesList from '../../components/offer-near-places/offer-near-places-list';
import { offerCards } from '../../mocks/offer-cards';
import { placeCards } from '../../mocks/place-cards';
import { PageType } from '../../utils/consts';

export default function OfferPage(): JSX.Element {
  const offer = offerCards[0];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription offer={offer}/>
              <OfferReviews />
            </div>
          </div>

          <Map pageType={PageType.Offer}/>
        </section>

        <div className="container">
          <OfferNearPlacesList placeCards={placeCards}/>
        </div>
      </main>
    </div>
  );
}
