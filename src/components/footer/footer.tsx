type TFooterProps = {
  isContainer: boolean;
}

export default function Footer({ isContainer }: TFooterProps): JSX.Element {
  return (
    <footer className={`footer ${isContainer ? 'container' : ''}`}>
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  );
}
