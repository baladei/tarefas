import { AnotherComponent } from "./components/AnotherComponent";
import { Container } from "./components/Container";
import { FirtComponent } from "./components/FirstComponent";
import { Fragment } from "./components/Fragment";
import { Hookies } from "./components/Hookies";
import { Images } from "./components/Images";
import { List } from "./components/List";
import { RenderCond } from "./components/RenderCond";

function App() {
  return (
    <div className="App">
      <h1>testando</h1>
      <FirtComponent />
      <AnotherComponent />
      <Images />
      <Hookies />
      <List />
      <RenderCond x={10} />
      <Fragment />
      <Container>
        <h1>Testando essa porra</h1>
      </Container>
    </div>
  );
}

export default App;
