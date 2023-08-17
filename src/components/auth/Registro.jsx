import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import { Button, Form } from 'react-bootstrap'
import { fireRegister } from '../../services/authServices'
import { registroMessage } from '../../Utils/errorMessage';

export default function Registro() {

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onChange" })

    const [alert, setAlert] = useState({variant:'',text:''});

    const onSubmit = async(data)=>{

        //setLoading(true);

        try{
            console.log('data form:')
            console.log(data)
    
            const response = await fireRegister(data);

            /*  
            setAlert({
                variant: "success",
                text: "Usuario creado con éxito",
                duration: 3000,
                link: "/login"
            })
            setLoading(false);
            */
           console.log('FireRegister response:')
            console.log(response)
            setAlert({
                variant: "succes",
                text: "El Usuario ha sido creado con éxito",
                duration: 3000,
                link: "/login"
            })
        }catch (e){
            console.log(e)
            setAlert({
                variant: "danger",
                text: registroMessage[e.code] || "Ooops... Ha ocurrido un error",
                duration: 3000,
                //link: "/login"
            })
            //setLoading(false);
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
        <br></br>
        <Alert variant={alert.variant} > {alert.text} </Alert>
        </div>

    </div>
    </>

  );
}