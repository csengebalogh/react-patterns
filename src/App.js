import './App.css';
// import { RegularList, NumberedList } from './models';
import { SplitScreen, Modal, ResourceLoader, DataSource } from './layout';
import { SmallPersonListItem, UserInfo } from './people'
import { SmallProductListItem, ProductInfo} from './products';
import { users, products } from './Lists';
import axios from 'axios';

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

    <DataSource 
      getDataFunc={async () => {
        const response = await axios.get(('/users/123'))

        return response.data
      }}
      resourceName='user'
    >
      <UserInfo />
    </DataSource>

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


    <DataSource
      getDataFunc={async () => {
        const response = await axios.get('/products/3456')

        return response.data
      }}
      resourceName='product'
    >
      <ProductInfo />
    </DataSource>

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
