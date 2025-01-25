import cx from 'classix';
import Logo from '../logo/logo';
import { getStyles } from '../../utils/helpers';
import {LOGO_STYLES, LogoType} from '../../utils/consts';
import { TTypeAs } from '../../types/helper';

type TFooterProps = {
  isContainer: boolean;
  logoType: TTypeAs<typeof LogoType>;
}

export default function Footer({ isContainer, logoType }: TFooterProps): JSX.Element {
  return (
    <footer className={cx('footer', isContainer && 'container')}>
      <Logo {...getStyles(logoType, LOGO_STYLES)}/>
    </footer>
  );
}
