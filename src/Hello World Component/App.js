import React from "react";

const App = (props) => {
  return (
    // react fragment syntactic sugar <></> with out syntactic sugar <React.Fragment></React.Fragment>
    <>
    {NestedComponents(props)}
    <NestedComponents age={props.age}  />
    <NestedComponents age={props.age}  />
    <NestedComponents age={props.age}  />
    <NestedComponents age={props.age}  />
    <NestedComponents age={props.age}  />
      <h1>{props.name}</h1>
      
    </>
  );
};
const NestedComponents  = (props) => {
  return (
    // react fragment syntactic sugar <></> with out syntactic sugar <React.Fragment></React.Fragment>
    <>
      <h1>{props.age}</h1>
      
    </>
  );
};

export default App;
