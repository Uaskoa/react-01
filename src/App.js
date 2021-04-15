
import PaintingList from "./components/PaintingList"
import paintings from "./paintings.json"

console.log(paintings);



const App = () => {
  return (
    <div>
      <h1>Main component</h1>
          <PaintingList paintings={ paintings} />
    </div>
  );
};

export default App;
