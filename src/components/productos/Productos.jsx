import { useEffect, useState } from 'react'
import Producto from './Producto.jsx'
import * as mp_services from '../../services/productosServices'


export default function ProductosHome(){

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const allProductos = async ()=>{
            try{
                const response = await mp_services.getAll()
                console.log(response.results)                
                
                setProductos(response.results)
                setLoading(false)               

            }catch{
                console.log('Oops... Ha ocurrido un error')
            }
        }

        allProductos()

    },[]);


    if(loading){
        return <>
            <div> Cargando... </div>
        </>
    }else{


        console.log('Cantidad de Productos:')
        console.log(productos.length);
        return(
            <>
                <div>
                    <h1>Noteboks</h1>
                    <div className="row">
                        {productos.map((producto)=>(                      
                            <Producto 
                                key= { producto.id }
                                id = { producto.id}
                                title= { producto.title }
                                price= { producto.price }
                                address= { producto.address }    
                                thumbnail = { producto.thumbnail }                         
                            />  
                        ))}
                    </div>
                    
                </div>
            </>
        )
        
    }

}