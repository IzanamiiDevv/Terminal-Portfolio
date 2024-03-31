import React, { useState } from "react";
import CommandLineInterFace from "./components/CLI";
import CLIDisplay from "./components/CLIDisplay";
import HomePage from "./components/Home";


function App() {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [ location , setLocation ] = useState('Home');
  const [ focus , setFocus ] = useState(false);

  function test(c: string) {
    const runCommand = (cmd: string) => {
      if (cmd.toLowerCase() == 'cls') {
        setElements([]);
        setLocation('Home')
        return;
      }
      if (cmd.toLowerCase() == 'new') {
        setElements([...elements,(<div key={elements.length}>
        <CLIDisplay text={cmd} location={location}/>
        <h1>New Element</h1>
        <br />
        </div>)]);
        return;
      }
      if(cmd.split(' ')[0] == 'echo'){
        if(cmd.split(' ').length < 2){
          setElements([...elements, (<div key={elements.length}>
          <CLIDisplay text={cmd} location={location}/>
          <p>
            <span className="error">Error:</span> Command Doesnt Have Any Parameter Applied to It
          </p>
          <br />
          </div>)]);
          return;
        };
        setElements([...elements,(<div key={elements.length}>
        <CLIDisplay text={cmd} location={location}/>
        <p>{cmd.split(' ').slice(1).join(' ')}</p>
        <br />
        </div>)]);
        return;
      }

      if(cmd.split(' ')[0] == 'cd'){
        if(cmd.split(' ').length < 2){
          setElements([...elements, (<div key={elements.length}>
          <CLIDisplay text={cmd} location={location}/>
          <p>
            <span className="error">Error:</span> Command Doesnt Have Any Parameter Applied to It
          </p>
          <br />
          </div>)]);
          return;
        }
        if(cmd.split(' ').slice(1).join(' ').toLowerCase() == 'home'){
          setElements([...elements, (<div key={elements.length}>
          <CLIDisplay text={cmd} location={location}/>
          <HomePage/>
          <br />
          </div>)]);
          setLocation('Home');
          return;
        }
        if(cmd.split(' ').slice(1).join(' ').toLowerCase() == 'skills'){
          setLocation('Skills');
          (async function() {
            const Skills = await import('./components/Skills');
            setElements([...elements, (<div key={elements.length}>
              <CLIDisplay text={cmd} location={location}/>
              <Skills.default/>
              <br />
            </div>)]);
          })();
          return;
        }
        if(cmd.split(' ').slice(1).join(' ').toLowerCase() == 'contact'){
          setLocation('Contact');
          (async function() {
            const Contact = await import('./components/Contact');
            setElements([...elements, (<div key={elements.length}>
              <CLIDisplay text={cmd} location={location}/>
              <Contact.default/>
              <br />
            </div>)])
          })();
          return;
        }
        setElements([...elements, (<div key={elements.length}>
          <CLIDisplay text={cmd} location={location}/>
          <p>
            <span className="error">Error:</span> Cant Find Given Directory
          </p>
          <br />
        </div>)]);
        return;
      }

      if (cmd.toLowerCase() == 'help') {
        (async function(){
          const Help = await import('./components/Help')
          setElements([...elements,(<div key={elements.length}>
            <CLIDisplay text={cmd} location={location}/>
            <Help.default/>
            <br />
          </div>)]);
        })();
        return;
      }
      //Unknown Command Fallout
      setElements([...elements, (<div key={elements.length}>
      <CLIDisplay text={cmd} location={location}/>
      <p key={elements.length}>
        <span className="error">Error:</span> <span className="high">'{c}'</span> is not recognized as an internal or external command.
      </p>
      <p>Use "<span className="high">help</span>" to see all commands</p>
      <br />
      </div>)]);
    };

    runCommand(c);
  }

  return (
    <div>
      <div className="Terminal" onClick={()=>{
        console.log("Focuss");
        setFocus(true)
        setTimeout(() => {
          console.log('Diko');
          setFocus(false)

        }, 1);
      }}>
        <HomePage/>
        <br />
        {elements.map((element) => {
          return element;
        })}
        <CommandLineInterFace key={0} command={test} location={location} focus={focus}/>
      </div>
    </div>
  );
}

export default App;