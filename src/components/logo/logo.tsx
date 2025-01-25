import cx from 'classix';
import { Link } from 'react-router-dom';
import { AppRoute, PageType } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';
import { memo } from 'react';

type TLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  pageType?: TTypeAs<typeof PageType>;
}

function Logo({ pageType, className, width, height }: TLogoProps): JSX.Element {
  return (
    <Link
      className={cx(`${className}__logo-link`, pageType === PageType.Main && `${className}__logo-link--active`)}
      to={AppRoute.Main}
    >
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

const MemoizedLogo = memo(Logo);
export default MemoizedLogo;
