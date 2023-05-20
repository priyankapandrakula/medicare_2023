import React, {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);
    const [Final_data,SetFinalData]=useState([]);
    const name=sessionStorage.getItem("name");
    // sessionStorage.removeItem("name");
    const getResponse= async ()=>{
        const res = await fetch('http://localhost:8081/getProducts')
                          .then(res=> res.json());
                          setProductData(await res);
                        
    }

    useEffect(()=>{
        getResponse();
    },[]);

    return (
        <>
        <Header/>
        <img src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/living-with-a-chronic-disease/help-for-managing-multiple-medications-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=122DB3C1DCAD683F2F7CAE139A67613C" style={{position:'absolute', width:"100%",opacity:'.7'}} height={657    } />
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <h1 className={'text-black my-5'}>Search products</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className={ 'bg-light text-light-primary'}>
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl 
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
                            className={ 'bg-light text-black'}
                        />
                    </InputGroup>
                </Col>
                <SearchFilter 
                    value={searchInput}
                    data={productData}
                    renderResults={results =>(
                        <Row className="justify-content-center">
                            {results.map((item, i)=>(
                                <ProductCard data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />
                
            </Row>
        </Container>
        </>
    );
};

export default Home;