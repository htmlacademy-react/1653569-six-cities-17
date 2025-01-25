import cx from 'classix';
import Logo from '../logo/logo';
import { getStyles } from '../../utils/helpers';
import {LOGO_STYLES, LogoType} from '../../utils/consts';
import { TTypeAs } from '../../types/helper';
import { memo, useMemo } from 'react';

type TFooterProps = {
  isContainer: boolean;
  logoType: TTypeAs<typeof LogoType>;
}

function Footer({ isContainer, logoType }: TFooterProps): JSX.Element {
  const logoStyle = useMemo(() => getStyles(logoType, LOGO_STYLES), [logoType]);

  return (
    <footer className={cx('footer', isContainer && 'container')}>
      <Logo {...logoStyle}/>
    </footer>
  );
}

const MemoizedFooter = memo(Footer);
export default MemoizedFooter;
