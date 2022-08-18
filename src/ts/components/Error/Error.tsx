import './Error.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectClickedId, fetchServicesData, fetchDetailsData } from '../../slices/servicesSlice';
import { SerializedError } from '@reduxjs/toolkit';

export default function Error({ error }: { error: SerializedError }): JSX.Element {
  const dispatch = useAppDispatch();
  const clickedID = useAppSelector(selectClickedId);

  const handleClick = () => {
    clickedID
      ? dispatch(fetchDetailsData(clickedID))
      : dispatch(fetchServicesData())
  }

  return (
    <div className="error">
      <div>{error.message}
        <button onClick={handleClick} className="error__btn">Повторить запрос</button>
      </div>
    </div>
  )
}