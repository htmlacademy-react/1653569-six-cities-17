const Setting = {
  RatingCoef: 20,
} as const;

const PageType = {
  Main: 'Main',
  Offer: 'Offer',
  Favorites: 'Favorites',
} as const;

const CardCount = {
  Min: 0,
  Max: 3,
} as const;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

const CARD_STYLES = {
  cardClassName: ['cities__card', 'favorites__card', 'near-places__card'],
  imageClassName: ['cities__image-wrapper', 'favorites__image-wrapper', 'near-places__image-wrapper'],
  imageWidth: [260, 150, 260],
  imageHeight: [200, 110, 200]
};

const RATINGS = [
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

export { Setting, PageType, CardCount, CITIES, SORT_OPTIONS, CARD_STYLES, RATINGS };
