import React,{Fragment,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { Card,Button} from 'react-bootstrap';

const  ItemCount=({productos}) =>{

        
  const{nombre,url,cantidad,descripcion}=productos

    const stockProducto =10;
    const [cantidadPro,settCantidad]=useState(0);
    
    return (

      
        <div className="hijo">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      {descripcion}
    </Card.Text>
    <Card.Text>
      Productos{cantidad}
    </Card.Text>
    <div className="container card-contenido">
    <Button variant="primary" onClick={()=>cantidadPro>0?settCantidad(cantidadPro-1):alert('agrega la cantidad')}>-</Button><span>{cantidadPro}</span> <Button variant="primary" onClick={()=>cantidadPro<cantidad?settCantidad(cantidadPro+1):alert('no hay mas productos en stock')}>+</Button>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default  ItemCount;