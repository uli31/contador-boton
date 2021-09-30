import React,{useState,useEffect} from 'react';
import '../index.css';
import ItemCount from './ItemCount';
import Prodcto from '../assets/data/prdoctos..json'

const ItemListContainer=()=> {
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        const conexion= new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Prodcto)
            },1000)
        })
        conexion.then(datos=>setProductos(datos))
        },[productos])

    return (
        <div className="Contenedor">
          
            {productos.map(productos=>(
                <ItemCount 
                key={productos.id}
                productos={productos}/>
            ))}
        </div>
    )
}
export default ItemListContainer;