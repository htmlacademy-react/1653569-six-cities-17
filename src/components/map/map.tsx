import { MapType } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';

type TMapProps = {
  mapType: TTypeAs<typeof MapType>;
  activePlaceCardId?: string | null;
}

export default function Map({ mapType, activePlaceCardId }: TMapProps): JSX.Element {
  return (
    <section
      className={`${mapType}__map map`}
      data-activePinId={activePlaceCardId}
    >
    </section>);
}
