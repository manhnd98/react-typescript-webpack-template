import React from "react";
import ButtonComponent from './components/button/button';
const App: React.FC = () => {
  return (
    <div className="wrapper tw-flex">
      <h1>React 17 and TypeScript 4 App!🚀</h1>
      <ButtonComponent>
        hello button
      </ButtonComponent>
    </div>
  );
};
export default App;
