import Card from 'react-bootstrap/Card'

import { Link } from "react-router-dom"


export default function Producto({ title, price, address, thumbnail, id }){
    return(
        <>
            
            <div className="col-3">
                <Card>
                    <Card.Img variant="top" src={ thumbnail } />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Ciudad vendedor: {address.city_name} - {address.state_name}</Card.Text>
                        <Card.Text>Precio: ${price}</Card.Text>

                        <Link to={`/productos/${id}`} className='btn btn-success'>Ver</Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}