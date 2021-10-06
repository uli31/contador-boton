import React,{Fragment,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { Card,Button} from 'react-bootstrap';
import swal from 'sweetalert2';


const  ItemCount=({productos}) =>{

        
  const{nombre,url,cantidad,descripcion}=productos

    
    const [cantidadPro,settCantidad]=useState(0);
    const mostrarProductos=()=>{
     swal.fire({
       title:nombre,
       html:
     `<p>${descripcion}</p>`,
    
       imageUrl: url,
       imageWidth: 400,
       imageHeight: 200,
       
       text: `piezas ${cantidad}`
       
       
     })
     console.log(descripcion);
    }
    
    return (

      
        <div className="hijo">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
  
    <Card.Text>
      Productos: {cantidad}
    </Card.Text>
    <div className="container card-contenido">
    <Button variant="primary" onClick={()=>cantidadPro>0?settCantidad(cantidadPro-1):swal('agrega la cantidad')}>-</Button><span>{cantidadPro}</span> <Button variant="primary" onClick={()=>cantidadPro<cantidad?settCantidad(cantidadPro+1): swal('no hay mas productos en stock')}>+</Button>
    
    </div>
    <Button className="btna" onClick={()=>mostrarProductos()}>Ver Producto </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default  ItemCount;