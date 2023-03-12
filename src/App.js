
function App() {

let nombre = "Gzzy";
let weed = ["Super Lemon Haze", "Blue Cheese", "Sour Diesel"];

  return (
    <div>
      <h1>My first React app!</h1>
      <img src="https://www.highlevelhealth.com/wp-content/uploads/2019/02/SLH.jpeg" alt="Demo Playground" width="750"/>
      <p>My name is {nombre}</p>
      <h2>Las últimas 3 geneticas que fume:</h2>
      <ul>
        {weed.map((genetica) => <li>{genetica}</li>)}
      </ul>
    </div>
  );
}

export default App;
