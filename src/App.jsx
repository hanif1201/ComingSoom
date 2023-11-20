import Timer from "./Components/Timer";
import Optin from "./Components/Optin";

import Preloader from "./Components/Preloader";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          JobMingo is Cooking
          <br />
          Website Coming Soon!
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
