import React from 'react';
import { Container, Row, Col, Tab, Nav, Image, Form, Button, Badge } from 'react-bootstrap';
import Heading from  '../components/Heading';
import profilePix from '../images/profile-picture.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet} from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import './my-account.css';
import OrderCard from '../components/OrderCard';
import { useNavigate } from '@reach/router';
import Header from '../components/Header';
import "./backgroundImage.css";


const MyAccount = () => {
    const navigate=useNavigate();
    return (
        <div className='containerUnique3'>
        <Header/>
        <img src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/living-with-a-chronic-disease/help-for-managing-multiple-medications-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=122DB3C1DCAD683F2F7CAE139A67613C" style={{position:'absolute', width:"100%",opacity:'.7',zIndex:"-1"}} height={657    } />

        <Container className="py-5 mt-5" style={{zIndex:'1'}}>
            <Heading heading="My Account" />
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className={`text-black bg-light p-2 rounded h-100 mb-3 user-menu`}>
                        <Row className="mb-3 py-2">
                           <Col xs={3} className="pe-0">
                                <Image
                                    src={profilePix}
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                           </Col> 
                           <Col xs={9} className="pt-1">
                                <span>Hello,</span>
                                <h4>Code With yd</h4>
                           </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="my-orders">
                                    My Orders
                                    <FaClipboardList size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="account-details">
                                    Account Details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="address">
                                    Address
                                    <IoLocationSharp size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="wallet">
                                    Wallet
                                    <GiWallet size="1.4rem" />
                                </Nav.Link>
                                
                                <button onClick={()=>{
                                    sessionStorage.removeItem("name");
                                    navigate("/sign-in");
                                }}  className={`btn btn-danger py-0`}>
                                    &nbsp;Logout
                                </button>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className={`text-black bg-light p-2 rounded`}>
                        <Tab.Content>
                            <Tab.Pane eventKey="my-orders">
                                <Heading heading="My Orders" size="h3" />
                                <OrderCard 
                                    orderDate="24 Jun, 2022" 
                                    orderId="1234" 
                                    title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                                    img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                                    deliveredDate="05 July, 2022"
                                    />
                                <OrderCard 
                                    orderDate="24 Jun, 2022" 
                                    orderId="1334" 
                                    title="Mens Casual Premium Slim Fit T-Shirts"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    deliveredDate="05 July, 2022"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="account-details">
                                <Heading heading="Account details" size="h3" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <Heading heading="Address" size="h3" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="wallet">
                                <Heading heading="Wallet" size="h3" />
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
        </div>
    );
};

export default MyAccount;