
import PaintingList from "./components/PaintingList/PaintingList"
import Panel from "./components/Panel/Panel"
import Notification from './components/Notification/Notification'
import paintings from "./paintings.json"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import Layout from './components/Layout/Layout'
import './styles.css'
import React from "react"


const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const App = () => {
  return (
    <>
      <Layout>
        <ColorPicker options={colorPickerOptions} />
        <Panel title="Последние новости">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
            explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
            aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
            reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
            fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
          </p>
        </Panel>
        <Notification text="It's OK" type="success" />
        <Notification text="It is NOT OK" type="error" />
        <ColorPicker options={colorPickerOptions} />
        <h1>Main component</h1>
        <PaintingList paintings={paintings} />
      </Layout>
    </>
  );
};

export default App;


