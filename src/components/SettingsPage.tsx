import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Label } from '@fluentui/react/lib/Label';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgg from '../open-in-new-tab-icon-12.jpg';
import "./settings.css";
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { BasicList } from './BasicList';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

export const SettingsPage: React.FunctionComponent = () => {
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
       <PrimaryButton text="+ Add Entry" className="bkcolor" />
   <TextField ariaLabel="Required without visible label" required />
  
      </Stack>

      <BasicList></BasicList>
{/* 
      <DetailsList></DetailsList> */}


   {/* <ButtonUI></ButtonUI> */}
    <br></br>
   <div className="nav-area">      
        <nav className="divright">
   <ul className="menus">
   <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Discard" />
      <PrimaryButton text="Save"   className="bkcolor"/>
    </Stack>
    {/* {listData.list.map((menu, index) => {
      //  return <MenuItems items={menu} key={index} />;
      (
      <li className="menu-items" key={index}>
       <a href="/#">{menu.name}</a>
      </li>
     );
    })} */}
   </ul>
  </nav>
      </div>
    <div>
      {/* <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />

      <List list={listData.list} /> */}
    </div>
   
    </Col>
   </Row>
 </Container>
       



  );
};
