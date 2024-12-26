export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
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

export const RatingType = {
  PlaceCard: 'place-card',
  Reviews: 'reviews',
  Offer: 'offer'
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

export const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
} as const;

export const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const Comment = {
  MinLength: 50,
  MaxLength: 300,
  InitState: '',
} as const;

export const Rating = {
  InitState: 0,
  Multiplier: 20,
} as const;

export const UrlMarker = {
  Default: '../img/pin.svg',
  Current: '../img/pin-active.svg'
} as const;

export const MapSetting = {
  Map: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Links: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

export const SortOption = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

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

export const ICON_STYLES = {
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};

export const RATINGS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  }
];
