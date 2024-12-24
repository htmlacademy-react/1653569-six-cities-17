import { useAppSelector } from '../../hooks/use-app-selector';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}
