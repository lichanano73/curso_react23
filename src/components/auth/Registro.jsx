import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import { fireRegister } from '../../services/authServices'

export default function Registro() {

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onChange" })

    const onSubmit = async(data)=>{

        try{
            console.log('data form:')
            console.log(data)
    
            const response = await fireRegister(data);
    
            console.log(response)
        }catch (e){
            console.log('Oooops... '.e)
            console.log(e)
        }

    }

  return (    
    <>
    <div className='row' >

        <div className='col-6'>
        <Form onSubmit={ handleSubmit(onSubmit) }>

            <Form.Group className='mb-3'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control type='text' placeholder='Apellido' {...register("apellido", { required: true })}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' placeholder='Nombre' {...register("nombre",{ required: true })}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>DNI</Form.Label>
                <Form.Control type='text' placeholder='DNI' {...register("dni",{ required: true })}/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Fecha nacimiento</Form.Label>
                <Form.Control type='date' {...register("fecha_nac")}/>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Sexo</Form.Label>
                <Form.Select {...register("sexo")}>
                    <option>Seleccionar</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password",{ required: true })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrar
            </Button>

        </Form>
        </div>

    </div>
    </>

  );
}