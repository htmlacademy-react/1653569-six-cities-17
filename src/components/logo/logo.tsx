import { Link } from 'react-router-dom';
import { AppRoute, PageType } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';

type TLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  pageType?: TTypeAs<typeof PageType>;
}

export default function Logo({ pageType, className, width, height }: TLogoProps): JSX.Element {
  return (
    <Link className={`${className}__logo-link ${pageType === PageType.Main ? `${className}__logo-link--active` : ''}`} to={AppRoute.Main}>
      <img
        className={`${className}__logo`}
        width={width}
        height={height}
        src="img/logo.svg"
        alt="6 cities logo"
      />
    </Link>
  );
}
