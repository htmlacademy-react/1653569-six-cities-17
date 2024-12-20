import { placeCards } from '../mocks/place-cards';
import { offerCards } from '../mocks/offer-cards';
import { CardCount } from '../utils/consts';

class OfferApiService {
  getPlaceCards() {
    return placeCards;
  }

  getOfferCard(id: string | undefined) {
    return offerCards.find((card) => card.id === id);
  }

  getOfferNearCards(id: string | undefined) {
    const currentCity = this.getOfferCard(id);
    return placeCards
      .filter((place) => place.city.name === currentCity?.city.name && place.id !== id)
      .slice(CardCount.Min, CardCount.Max);
  }
}

export default new OfferApiService();
