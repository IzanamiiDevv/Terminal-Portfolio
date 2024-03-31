import React, { useState } from "react";
import CommandLineInterFace from "./components/CLI";
import CLIDisplay from "./components/CLIDisplay";
import HomePage from "./components/Home";


function App() {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [ location , setLocation ] = useState('Home');

  function test(c: string) {
    const runCommand = (cmd: string) => {
      if (cmd.toLowerCase() == 'cls') {
        setElements([]);
        return;
      }
      if (cmd.toLowerCase() == 'new') {
        setElements([...elements,(<>
        <CLIDisplay text={cmd} location={location}/>
        <h1 key={elements.length}>New Element</h1>
        <br />
        </>)]);
        return;
      }
      if(cmd.split(' ')[0] == 'echo'){
        if(cmd.split(' ').length < 2){
          setElements([...elements, (<>
          <CLIDisplay text={cmd} location={location}/>
          <p key={elements.length}>
            <span className="error">Error:</span> Command Doesnt Have Any Parameter Applied to It
          </p>
          <br />
          </>)]);
          return;
        };
        setElements([...elements,(<>
        <CLIDisplay text={cmd} location={location}/>
        <p key={elements.length}>{cmd.split(' ').slice(1).join(' ')}</p>
        <br />
        </>)]);
        return;
      }

      if(cmd.split(' ')[0] == 'cd'){
        if(cmd.split(' ').length < 2){
          setElements([...elements, (<>
          <CLIDisplay text={cmd} location={location}/>
          <p key={elements.length}>
            <span className="error">Error:</span> Command Doesnt Have Any Parameter Applied to It
          </p>
          <br />
          </>)]);
          return;
        }
        if(cmd.split(' ').slice(1).join(' ').toLowerCase() == 'home'){
          setElements([...elements, (<>
          <CLIDisplay text={cmd} location={location}/>
          <HomePage/>
          <br />
          </>)]);
          setLocation('Home');
          return;
        }
        if(cmd.split(' ').slice(1).join(' ').toLowerCase() == 'skills'){
          setElements([...elements, (<>
          <CLIDisplay text={cmd} location={location}/>
          <HomePage/>
          <br />
          </>)]);
          setLocation('Skills');
          return;
        }
        if(cmd.split(' ').slice(1).join(' ').toLowerCase() == 'contact'){
          setElements([...elements, (<>
          <CLIDisplay text={cmd} location={location}/>
          <HomePage/>
          <br />
          </>)]);
          setLocation('Contact');
          return;
        }
        setElements([...elements, (<>
          <CLIDisplay text={cmd} location={location}/>
          <p key={elements.length}>
            <span className="error">Error:</span> Given Path Doesnt Exist!
          </p>
          <br />
        </>)]);
        return;
      }
      //Unknown Command Fallout
      setElements([...elements, (<>
      <CLIDisplay text={cmd} location={location}/>
      <p key={elements.length}>
        <span className="error">Error:</span> <span className="high">'{c}'</span> is not recognized as an internal or external command.
      </p>
      <p>Use "<span className="high">help</span>" to see all commands</p>
      <br />
      </>)]);
    };

    runCommand(c);
  }

  return (
    <div>
      <div className="Terminal">
        <HomePage/>
        <br />
        {elements.map((element) => {
          return element;
        })}
        <CommandLineInterFace key={0} command={test}  location={location}/>
      </div>
    </div>
  );
}

export default App;
