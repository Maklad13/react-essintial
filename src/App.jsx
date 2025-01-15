import MainGoal, { mainGoal } from "./MainGoal";
import User from "./User";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./Components/CoreConcepts";
import Header from "./Components/Header";
import TabButton from "./Components/TabButton";
import Card from "./Components/Card";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples";
function App() {
  const [tabbedBtn, setTabbedBtn] = useState();
  function handleSelect(selectedBtn) {
    setTabbedBtn(selectedBtn);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              selected={tabbedBtn === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              selected={tabbedBtn === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              selected={tabbedBtn === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              selected={tabbedBtn === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabbedBtn ? (
            <div id="tab-content">
              <h3>{EXAMPLES[tabbedBtn].title}</h3>
              <p>{EXAMPLES[tabbedBtn].description}</p>
              <pre>
                <code>{EXAMPLES[tabbedBtn].code}</code>
              </pre>
            </div>
          ) : (
            <p>please select a button</p>
          )}
        </section>
      </main>
      {/* <Card name={"ahmed"}>
        <MainGoal {...mainGoal[0]} />
        <MainGoal {...mainGoal[1]} />
        <User />
      </Card> */}
    </div>
  );
}

export default App;
