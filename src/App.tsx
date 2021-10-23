import React from 'react';
import './App.css';
import Button ,{ButtonType,ButtonSize} from './components/Button/button'
const App: React.FC = () => {
  return (
    <div className="App">
      <Button>button</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>button</Button>
      <Button btnType={ButtonType.Link} href="百度" >button</Button>
      <Button btnType={ButtonType.Link} >button</Button>
      <Button disabled>button</Button>

      <h2>h1</h2>
      <h2>h2</h2>
      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md jsx-a11y/anchor-is-valid  ">a标签的样式</a>
    </div>
  );
}

export default App;
