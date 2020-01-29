import React from 'react';
import { Container,Nav} from 'react-bootstrap';
import '../styles/AllCocktails.css'



class AllCocktails extends React.Component {



 renderLeters(){

     let  leters=[];
     for (let i = 0; i < 27; i++) {
       leters.push(String.fromCharCode(97 + i));
     }
     leters.pop();
return leters;
 }

 render() {

return(
<Container>
     <Nav  variant="tabs" defaultActiveKey="/home">

             {
                 this.renderLeters().map(letter=>

                     <Nav.Item id={"tab"}>
                     <Nav.Link  id="tabs" path={"/AllCoctails"}>{letter}</Nav.Link>
                     </Nav.Item>
                 )

             }

     </Nav>
</Container>

);



 }


}
export default AllCocktails;