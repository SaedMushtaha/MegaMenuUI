import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./settings.css";


import { v4 as uuidv4 } from 'uuid';

 //import MenuItems from "./MenuItems";
import {menuItems} from "../menuItems";
import imgg from '../open-in-new-tab-icon-12.jpg'

const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id }),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: menuItems,
    isShowList: true,
  });
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });

    setName('');
  }

  return (
   
<Container>
<Row className="margintop">
    <Col xs={6} md={4} className={'borderright'}>
    <h6 class="font-weight-bold text-uppercase borderbottom"><b>Settings</b></h6>
    <span className="block-example border-bottom border-dark"></span>
     <div  class="col-lg-6 mb-4 ">
                     <span class="number">1</span>   <span class="font-weight-bold"> Settings </span>
                          <ul class="list-unstyled">
                            <li class="nav-item"><a href="" class="nav-link text-small pb-0 alink"><img src={imgg} height={12} width={10}></img> Step 1</a></li>
                            <li class="nav-item"><a href="" class="nav-link text-small pb-0 alink"><img src={imgg} height={12} width={10}></img> Step 2</a></li>
                            <li class="nav-item"><a href="" class="nav-link text-small pb-0 alink"> <img src={imgg} height={12} width={10}></img> Step 3</a></li>
                                                </ul>
                        </div>
                        <div class="col-lg-6 mb-4">
                        <span class="number">2</span > <span class="font-weight-bold">Administration</span> 
                          <ul class="list-unstyled">
                            <li class="nav-item"><a href="" class="nav-link text-small pb-0 alink "> <img src={imgg} height={12} width={10}></img> Licsensing</a></li>
                            <li class="nav-item"><a href="" class="nav-link text-small pb-0 alink "> <img src={imgg} height={12} width={10}></img> Administration</a></li>
                              </ul>
                        </div>
                     
    </Col>
    <Col xs={12} md={8}>
    <h6 class="font-weight-bold text-uppercase"><b>Configure Navigation</b></h6>
    The mega Menu can be configured here
    <h6>Add Navigations entries</h6>
    here is an example of how section can be used to group inputs
    
   
    <br></br>
    {/* <input type="search" placeholder="Search in items"></input> */}
    {/* <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> */}
   <div className="nav-area">      
        <nav>
   <ul className="menus">
    {listData.list.map((menu, index) => {
      //  return <MenuItems items={menu} key={index} />;
      (
      <li className="menu-items" key={index}>
       <a href="/#">{menu.name}</a>
      </li>
     );
    })}
   </ul>
  </nav>
      </div>
    <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />

      <List list={listData.list} />
    </div>
   
    </Col>
   </Row>
 </Container>
       


  );
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" class="newcolor" onClick={onAdd}>
      Add Entry
    </button>
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default App;

