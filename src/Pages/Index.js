import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import {AiOutlineFileSearch} from "react-icons/ai"
import { Link } from '@reach/router';

const Index=()=> {
  return (
    <>

        <Header/>
   
    <Card className="bg-white text-dark" style={{position:'relative',top:"54px" , textAlign:'center'}}>
      <Card.Img src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/living-with-a-chronic-disease/help-for-managing-multiple-medications-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=122DB3C1DCAD683F2F7CAE139A67613C" style={{position:'relative', width:"100%" }} height={600}  alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><b className='text-dark h1' style={{fontFamily:'serif',fontWeight:'bolder'}}>Medicare  <br></br></b> A Place to Cure All Your Diseases</Card.Title>
        <Card.Text>
          This is a Medical E-commerce Websit from which you can Order all your Medicines Online
        </Card.Text>
        <Link to="/home" className='btn btn-primary '><AiOutlineFileSearch size="1.8rem"/>  Search Medicines</Link>
      </Card.ImgOverlay>
    </Card>
    
    </>
  );
}

export default Index;

// width: 87%;
//     position: relative;
//     left: 6%;