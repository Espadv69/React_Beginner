import { navigateTo } from '../components/App.jsx'

export function HomePage() {
  return (
    <>
      <h1 className="h1-title">Home</h1>
      <p className="p-spa">
        This is an example page for creating a React Router from scratch.
      </p>
      <button
        type="button"
        onClick={() => navigateTo('/about')}
        className="a-spa"
      >
        About us
      </button>
    </>
  )
}
