import Nav from "./components/Nav";

function App() {
  const key = process.env.REACT_APP_APIKEY

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
