import './App.css';
import { RegularList, NumberedList } from './models';
import { SplitScreen, Modal } from './layout';
import { SmallPersonListItem, UserInfo } from './people'
import { SmallProductListItem, ProductInfo} from './products';
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
    itemComponent={UserInfo}
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
    itemComponent={ProductInfo}
    />

    </>
  )
}

function App() {
  return (
    <>

    <Modal>
      <ProductInfo product={products[0]}/>
    </Modal>


      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent leftTitle="People" />
        <RightComponent rightTitle="Products"/>
      </SplitScreen>

    </>

  );
}

export default App;
