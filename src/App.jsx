import "./App.css";
import { Header } from "./companents/Wine/Header/Header";
import { Main } from "./companents/Wine/Main/Main";

function App() {
  return (
    <>
      <body>
        <div className="div-container">
          <Header />
          <Main />
        </div>
        {/* <Wine title={'Şərab 1903'} description={'Winemaking'} rating={'Yuksek seviyyede'}/>
      <Wine title={'Azərbaycan şərab '} description={'Üzüm çərabı'} rating={'orta'}/>
      <Wine title={'Şərab 1980'} description={'Winemaking'} rating={'Yuksek seviyyede'}/> */}
      </body>
    </>
  );
}

export default App;
