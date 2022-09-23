import './App.css';
import { RegularList, NumberedList } from './models';
import { SplitScreen } from './layout';
import { SmallPersonListItem, LargePersonListItem } from './people'
import { SmallProductListItem, LargeProductListItem} from './products';
import { people, products } from './Lists';

const LeftComponent = ({leftTitle}) => {
  return (
    <>

    <h1>{leftTitle}</h1>

    <RegularList 
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem}
    />
    
    
    <NumberedList 
    items={people}
    resourceName="person"
    itemComponent={LargePersonListItem}
    />

    </>
  )
}
const RightComponent = ({rightTitle}) => {
  return (
    <>

    <h1>{rightTitle}</h1>

    <RegularList 
      items={products}
      resourceName="product"
      itemComponent={SmallProductListItem}
    />

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
        <LeftComponent leftTitle="People" />
        <RightComponent rightTitle="Products"/>
      </SplitScreen>

    </>

  );
}

export default App;
