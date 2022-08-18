import './Loading.scss'

export default function Loading(): JSX.Element {
  return (
    <div className="loading">
      <div className="loading__center">
        <div className="loading__ring"></div>
        <span>loading...</span>
      </div>
    </div>
  )
}