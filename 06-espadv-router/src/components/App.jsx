import '../css/App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example page for creating a React Router from scratch.</p>
      <a href="/about">About us</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <p>Hello!, I'm Espadv and i'm creating a clon of React router.</p>
        <img
          src="https://avatars.githubusercontent.com/u/162121948?s=96&v=4"
          alt="Espadv"
        />
      </div>
      <a href="/">Home</a>
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
