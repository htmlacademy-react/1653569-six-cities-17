import { TOfferCard } from '../../types/offer-card';

type TOfferGalleryProps = Pick<TOfferCard, 'images'>;

export default function OfferGallery({ images }: TOfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.map((image) => (
            <div className="offer__image-wrapper" key={image}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))
        }
      </div>
    </div>
  );
}
