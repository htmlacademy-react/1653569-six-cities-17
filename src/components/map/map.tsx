import { PageType } from '../../utils/consts';

type TMapProps = {
  pageType: string;
}

export default function Map({ pageType }: TMapProps): JSX.Element {
  const getMapClassName = () => {
    switch (pageType) {
      case PageType.Main:
        return 'cities__map';
      case PageType.Offer:
        return 'offer__map';
    }
  };

  return <section className={`${getMapClassName()} map`}></section>;
}
