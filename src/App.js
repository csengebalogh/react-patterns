import './App.css';
import { RegularList, NumberedList } from './models';
import { SplitScreen, Modal, ResourceLoader, UserLoader } from './layout';
import { SmallPersonListItem, UserInfo } from './people'
import { SmallProductListItem, ProductInfo} from './products';
import { users, products } from './Lists';
import axios from 'axios'

const LeftComponent = ({leftTitle}) => {
  return (
    <>

    <h1>{leftTitle}</h1>

    {/* <RegularList 
      items={users}
      resourceName="person"
      itemComponent={SmallPersonListItem}
    />
    
    
    <NumberedList 
    items={users}
    resourceName="user"
    itemComponent={UserInfo}
    /> */}

<ResourceLoader resourceURL='/users/234' resourceName='user'>
      <UserInfo />
    </ResourceLoader>

    </>
  )
}
const RightComponent = ({rightTitle}) => {
  return (
    <>

    <h1>{rightTitle}</h1>

    {/* <RegularList 
      items={products}
      resourceName="product"
      itemComponent={SmallProductListItem}
    />

    <NumberedList 
    items={products}
    resourceName="product"
    itemComponent={ProductInfo}
    /> */}


    <ResourceLoader resourceURL='/products/2345' resourceName='product'>
      <ProductInfo />
    </ResourceLoader>

    </>
  )
}

// this better be fetched from the server, then children loaded while response has next "line"

// const userIds = ['123', '234', '345']


// {userIds.map(userId => {
//   return(
//     <UserLoader key={userId} userId={userId}>
//     <UserInfo />
//   </UserLoader>
//   )

// })}


function App() {
  return (
    <>


    <Modal>
      <ProductInfo product={products[0]}/>
    </Modal>

    <SplitScreen leftWeight={2} rightWeight={3}>
      <LeftComponent leftTitle="People" />
      <RightComponent rightTitle="Products"/>
    </SplitScreen>

    </>

  );
}

export default App;
