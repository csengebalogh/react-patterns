import './App.css';
import { RegularList } from './RegularList';
import { NumberedList } from './NumberedList';
import { SplitScreen } from './SplitScreen';
import { SmallPersonListItem, } from './people/SmallPersonListItem';
import { LargePersonListItem, } from './people/LargePersonListItem';
import { SmallProductListItem, } from './products/SmallProductListItem';
import { people, products } from './Lists';
import { LargeProductListItem } from './products/LargeProductListItem';

const LeftComponent = ({leftTitle}) => {
  return (
    <>

    <h1>{leftTitle}</h1>
    
    
    <RegularList 
    items={products}
    resourceName="product"
    itemComponent={SmallProductListItem}
    />

    </>
  )
}
const RightComponent = ({rightTitle}) => {
  return (
    <>

    <h1>{rightTitle}</h1>

    <NumberedList 
    items={products}
    resourceName="product"
    itemComponent={LargeProductListItem}
    />

    </>
  )
}

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent leftTitle="Small Regular List" />
        <RightComponent rightTitle="Large Numbered List"/>
      </SplitScreen>

    </>

  );
}

export default App;
