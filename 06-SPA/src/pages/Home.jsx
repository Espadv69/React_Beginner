import { Link } from '../components/Link.jsx'

export default function HomePage() {
  return (
    <>
      <h1 className="h1-title">Home</h1>
      <p className="p-spa">
        This is an example page for creating a React Router from scratch.
      </p>
      <Link to="/about">About us</Link>
    </>
  )
}
