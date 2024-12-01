type TBookmarkProps = {
  className?: string;
  width?: number;
  height?: number;
  isFavorite?: boolean;
}

export default function Bookmark({ className, width, height, isFavorite = false }: TBookmarkProps): JSX.Element {
  return (
    <button
      className={`${className}__bookmark-button ${isFavorite ? `${className}__bookmark-button--active` : ''} button`}
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
