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

export const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  )
}
