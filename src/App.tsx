import React, { useState } from "react";
import CommandLineInterFace from "./components/CLI";

function App() {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  function test(c: string) {
    const runCommand = (cmd: string) => {
      if (cmd.toLowerCase() == 'cls') {
        setElements([]);
        return;
      }
      if (cmd.toLowerCase() == 'new') {
        setElements([...elements,(<>
        <h1>New Element</h1>
        <hr />
        </>)]);
        return;
      }
      //Unknown Command Fallout
      setElements([...elements, (<p key={elements.length}>
        <span className="error">Error:</span> <span className="high">'{c}'</span> is not recognized as an internal or external command.
      </p>)]);
    };

    runCommand(c);
  }

  return (
    <div>
      <div className="Terminal">
        {elements.map((element) => {
          return element;
        })}
        <CommandLineInterFace key={0} command={test} />
      </div>
    </div>
  );
}

export default App;
