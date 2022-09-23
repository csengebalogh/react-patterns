import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftComponent = ({name}) => {
  return <h1>{name}</h1>
}
const RightComponent = ({message}) => {
  return <h1>{message}</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftComponent name="John" />
      <RightComponent message="Hello!"/>
    </SplitScreen>
  );
}

export default App;
