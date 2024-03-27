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
        <h1 key={elements.length}>New Element</h1>
        </>)]);
        return;
      }
      if(cmd.split(' ')[0] == 'echo'){
        if(cmd.split(' ').length < 2){
          setElements([...elements, (<p key={elements.length}>
            <span className="error">Error:</span> Command Doesnt Have Any Parameter Applied to It
          </p>)]);
          return;
        };
        setElements([...elements,(<>
        <p key={elements.length}>{cmd.split(' ').slice(1).join(' ')}</p>
        <br />
        </>)]);
        return;
      }
      //Unknown Command Fallout
      setElements([...elements, (<>
      <p key={elements.length}>
        <span className="error">Error:</span> <span className="high">'{c}'</span> is not recognized as an internal or external command.
      </p>
      <p>Use "<span className="high">help</span>" to see all commands</p>
      </>)]);
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
