import React,{Fragment,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chup1 from '../assets/img/chupapansa.webp';
import { Card,Button} from 'react-bootstrap';

const  ItemCount=() =>{

    const stockProducto =10;
    const [cantidadPro,settCantidad]=useState(4);
    



    
    return (
        <div className="contenedor">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={chup1} />
  <Card.Body>
    <Card.Title>Chupa Panza</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Text>
      Productos{stockProducto}
    </Card.Text>
    <div className="container card-contenido">
    <Button variant="primary" onClick={()=>cantidadPro>0?settCantidad(cantidadPro-1):alert('agrega la cantidad')}>-</Button><span>{cantidadPro}</span> <Button variant="primary" onClick={()=>cantidadPro<stockProducto?settCantidad(cantidadPro+1):alert('no hay mas productos en stock')}>+</Button>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default  ItemCount;