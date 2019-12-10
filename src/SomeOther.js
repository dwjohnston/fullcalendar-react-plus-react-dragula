import React from 'react';

import Dragula from "react-dragula";
import { DrakeContext } from './App';

export function SomeOther({ }) {

    const drake = React.useContext(DrakeContext); 

    const refA = React.useRef();
    const refB = React.useRef();
  
    React.useEffect(() => {
        if (refA.current && refB.current) {
          drake.containers.push(refA.current); 
          drake.containers.push(refB.current); 
          //setDrake(drake); 
          console.log(drake);
        }
      }, [refA, refB, drake]);



    return (<>
        <h1> Some Other</h1>
        <div className="container" ref={refA}>
        <div>Swap me around</div>
        <div>Swap her around</div>
        <div>Swap him around</div>
        <div>Swap them around</div>
        <div>Swap us around</div>
        <div>Swap things around</div>
        <div>Swap everything around</div>
      </div>

      <div className="container" ref={refB}>
        <div>Foo</div>
        <div>Bar</div>
        <div>Biz</div>
      </div>
    </>
        );

}

