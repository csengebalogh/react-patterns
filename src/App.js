import './App.css';
import { RegularList, NumberedList } from './models';
import { SplitScreen, Modal, CurrentUserLoader, UserLoader } from './layout';
import { SmallPersonListItem, UserInfo } from './people'
import { SmallProductListItem, ProductInfo} from './products';
import { users, products } from './Lists';
import axios from 'axios'

const LeftComponent = ({leftTitle}) => {
  return (
    <>

    <h1>{leftTitle}</h1>

    <RegularList 
      items={users}
      resourceName="person"
      itemComponent={SmallPersonListItem}
    />
    
    
    <NumberedList 
    items={users}
    resourceName="user"
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

// this better be fetched from the server, then children loaded while response has next "line"
const userIds = ['123', '234', '345']

function App() {
  return (
    <>

    {userIds.map(userId => {
      return(
        <UserLoader key={userId} userId={userId}>
        <UserInfo />
      </UserLoader>
      )

    })}


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
