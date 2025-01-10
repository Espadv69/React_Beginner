import { Link } from '../components/Link.jsx'

export default function AboutPage() {
  return (
    <>
      <h1 className="h1-title">About</h1>
      <div className="div-about">
        <img
          src="https://avatars.githubusercontent.com/u/162121948?s=96&v=4"
          alt="Espadv"
          className="img-spa"
        />
        <p className="p-spa">
          Hello!, I'm Espadv and i'm creating a clon of React router.
        </p>
      </div>
      <Link to="/">Home</Link>
    </>
  )
}
