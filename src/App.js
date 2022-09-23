import './App.css';
import { RegularList } from './RegularList';
import { SplitScreen } from './SplitScreen';
import { SmallPersonListItem, } from './people/SmallPersonListItem';
import { LargePersonListItem, } from './people/LargePersonListItem';
import { people } from './Lists';

const LeftComponent = ({leftTitle}) => {
  return (
    <>

    <h1>{leftTitle}</h1>
    
    
    <RegularList 
    items={people}
    resourceName="person"
    itemComponent={SmallPersonListItem}
    />

    </>
  )
}
const RightComponent = ({rightTitle}) => {
  return (
    <>

    <h1>{rightTitle}</h1>

    <RegularList 
    items={people}
    resourceName="person"
    itemComponent={LargePersonListItem}
    />

    </>
  )
}

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent leftTitle="Small List" />
        <RightComponent rightTitle="Large List"/>
      </SplitScreen>

    </>

  );
}

export default App;
