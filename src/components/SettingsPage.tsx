import * as React from 'react';
import { useState } from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Label } from '@fluentui/react/lib/Label';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgg from '../open-in-new-tab-icon-12.jpg';
import "./settings.css";
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import {menuItems} from "../menuItems";
import { v4 as uuidv4 } from 'uuid';
import internal from 'stream';

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 250 } };

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

export const SettingsPage: React.FunctionComponent = () => {


const listReducer = (state:any, action:any) => {
 

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
  


  const [listData, dispatchListData] = React.useReducer(listReducer, {
    
    list:JSON.parse(localStorage.getItem("names") || '{}' ),  
    isShowList: true,
  });
  const [name, setName] = React.useState('');

  function handleChange(event:any) {
    setName(event.target.value);
  }

  function handleAdd() {

    dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });
    const items = JSON.parse(localStorage.getItem("names") || '{}');
    const newItems = JSON.stringify([...items,{title:name, name:name}])
    localStorage.setItem("names",newItems);
 
   
    setName('');
  }


  
  function savebutton() {
    window.location.reload();
  }


  return (

    <Container>
<Row className="margintop">
    <Col xs={6} md={4} className={'borderright'}>
    <h6 className="font-weight-bold text-uppercase borderbottom"><Label><h6><b>Settings</b></h6></Label></h6>
    <span className="block-example border-bottom border-dark"></span>
     <div  className="col-lg-6 mb-4 ">
                     <Label><span className="number">1</span>   <span className="font-weight-bold">   <b>Settings </b></span></Label>
                          <ul className="list-unstyled">
                            <Label><li className="nav-item"><a href="" className="nav-link text-small pb-0 alink"><img src={imgg} height={12} width={10}></img> Step 1</a></li></Label>
                            <Label><li className="nav-item"><a href="" className="nav-link text-small pb-0 alink"> <img src={imgg} height={12} width={10}></img> Step 2</a></li></Label>
                            <Label><li className="nav-item"><a href="" className="nav-link text-small pb-0 alink"> <img src={imgg} height={12} width={10}></img> Step 3</a></li></Label>
                                                </ul>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <Label><span className="number">2</span > <span className="font-weight-bold"> <b>Administration</b></span></Label> 
                          <ul className="list-unstyled">
                           <Label>  <li className="nav-item"><a href="" className="nav-link text-small pb-0 alink "> <img src={imgg} height={12} width={10}></img> Licsensing</a></li></Label>
                           <Label><li className="nav-item"><a href="" className="nav-link text-small pb-0 alink "> <img src={imgg} height={12} width={10}></img> Administration</a></li></Label>
                              </ul>
                        </div>
                     
    </Col>
    <Col xs={12} md={8}>
    <Label><h6 className="font-weight-bold text-uppercase"><b>Configure Navigation</b></h6></Label>
    The mega Menu can be configured here <br></br>
    <h6 className="topspace">Add Navigations entries</h6>
    here is an example of how section can be used to group inputs
    <Stack horizontal tokens={stackTokens} className="topspace">
       <PrimaryButton text="+ Add Entry" className="bkcolor" onClick={handleAdd} />
       <TextField ariaLabel="Required without visible label" onChange={handleChange} required />
       <SearchBox
    styles={searchBoxStyles}
    placeholder="Search for a navigation entry" 
    onEscape={ev => {
      console.log('Custom onEscape Called');
    }}
    onClear={ev => {
      console.log('Custom onClear Called');
    }}
    onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
    onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
  />
 
  
      </Stack>



    <ul>
      {listData.list.map((item:any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    <br></br>
   <div className="nav-area">      
        <nav className="divright">
   <ul className="menus">
   <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Discard" />
      <PrimaryButton text="Save"  onClick={savebutton}  className="bkcolor"/>
    </Stack>
   </ul>
  </nav>
      </div>
    
    
    </Col>
   </Row>
 </Container>
       



  );
};


  




