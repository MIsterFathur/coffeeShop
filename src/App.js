import Home from "./pages/Home";
import { Helmet } from "react-helmet";
function App() {
  const smoothScroolStyle = {
    scrollBehavior: "smooth",
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seruput Karsa</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Seruput Karsa" />
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
