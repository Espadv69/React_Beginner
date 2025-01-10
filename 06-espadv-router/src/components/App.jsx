import '../css/App.css'

function HomePage() {
  return (
    <>
      <h1 className="h1-title">Home</h1>
      <p className="p-spa">
        This is an example page for creating a React Router from scratch.
      </p>
      <a href="/about" className="a-spa">
        About us
      </a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1 className="h1-title">About</h1>
      <div className="div-about">
        <p className="p-spa">
          Hello!, I'm Espadv and i'm creating a clon of React router.
        </p>
        <img
          src="https://avatars.githubusercontent.com/u/162121948?s=96&v=4"
          alt="Espadv"
        />
      </div>
      <a href="/" className="a-spa">
        Home
      </a>
    </>
  )
}

export const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
    </div>
  )
}
