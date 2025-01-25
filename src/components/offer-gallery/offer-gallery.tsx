import { memo } from 'react';
import { TOfferCard } from '../../types/offer-card';
import { ImageCount } from '../../utils/consts';

type TOfferGalleryProps = Pick<TOfferCard, 'images'>;

function OfferGallery({ images }: TOfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.slice(ImageCount.Min, ImageCount.Max).map((image) => (
            <div className="offer__image-wrapper" key={image}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

const MemoizedOfferGallery = memo(OfferGallery);
export default MemoizedOfferGallery;
