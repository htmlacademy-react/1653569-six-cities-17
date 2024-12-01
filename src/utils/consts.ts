export const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const Setting = {
  RatingCoef: 20,
} as const;

export const PageType = {
  Main: 'main',
  Offer: 'offer',
  Favorites: 'favorites',
} as const;

export const LogoType = {
  Header: 'header',
  Footer: 'footer',
} as const;

export const MarkType = {
  Small: 'small',
  Medium: 'medium',
} as const;

export const MapType = {
  Main: 'cities',
  Offer: 'offer',
} as const;

export const CardCount = {
  Min: 0,
  Max: 3,
} as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  ID: '/:id',
  NotFound: '*'
} as const;

export const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const CARD_STYLES = {
  className: ['cities', 'favorites', 'near-places'],
  width: [260, 150, 260],
  height: [200, 110, 200],
};

export const LOGO_STYLES = {
  className: ['header', 'footer'],
  width: [81, 64],
  height: [41, 33],
};

export const MARK_STYLES = {
  className: ['place-card', 'offer'],
  width: [18, 31],
  height: [19, 33],
};

export const RATINGS = [
  {
    value: 5,
    title: 'perfect',
    checked: false
  },
  {
    value: 4,
    title: 'good',
    checked: false
  },
  {
    value: 3,
    title: 'not bad',
    checked: false
  },
  {
    value: 2,
    title: 'badly',
    checked: false
  },
  {
    value: 1,
    title: 'terribly',
    checked: false
  }
];
