import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftComponent = () => {
  return <h1>Left!</h1>
}
const RightComponent = () => {
  return <h1>Right!</h1>
}

function App() {
  return (
    <SplitScreen 
        left={LeftComponent}
        right={RightComponent}
    />
  );
}

export default App;
