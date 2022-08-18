import './List.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ListItem from './ListItem/ListItem';
import { selectError, selectLoading, selectServices } from '../../slices/servicesSlice';
import { useEffect } from 'react';
import { fetchServicesData } from '../../slices/servicesSlice';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

export default function List(): JSX.Element {
  const services = useAppSelector(selectServices);
  const error = useAppSelector(selectError);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchServicesData());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <table className="app__table table">
        <thead className="table__thead">
          <tr>
            <th className="thead__item">Наименование услуги</th>
            <th className="thead__item">Стоимость</th>
            <th className="thead__item">Действия</th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {services && services.map((el) => <ListItem key={el.id} element={el} />)}
        </tbody>
      </table>
    </>
  )
}