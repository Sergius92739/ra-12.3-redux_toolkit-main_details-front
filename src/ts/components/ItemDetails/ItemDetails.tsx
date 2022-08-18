import './ItemDetails.scss'
import { useAppSelector } from '../../hooks/hooks'
import { selectDetails, selectError, selectLoading } from '../../slices/servicesSlice';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function ItemDetails(): JSX.Element {
  const details = useAppSelector(selectDetails);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  return (
    <>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {details && <div className="app__details">
        <div id={String(details?.id)} className="details">
          <Link to={'/ra-12.3-redux_toolkit-main_details-front/'} className="details__btn">X</Link>
          <div className="details__item">Услуга: {details?.name}</div>
          <div className="details__item">Цена: {details?.price}</div>
          <div className="details__item">Детали: {details?.content}</div>
        </div>
      </div>}
    </>
  )
}