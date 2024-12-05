import { MapType } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';

type TMapProps = {
  mapType: TTypeAs<typeof MapType>;
}

export default function Map({ mapType }: TMapProps): JSX.Element {
  return (<section className={`${mapType}__map map`}></section>);
}
