import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import { fireLogin } from '../../services/authServices'

export default function Login() {

    const { register ,handleSubmit, formState: {errors} } = useForm({mode:"onChange"})

    const onSubmit = async (data)=>{

        try{
            const responseLogin = await fireLogin(data);

            console.log('responseLogin')
            console.log(responseLogin)
        }catch(e){
            console.log('Ooops.. Ha ocurrido un error')
            console.log(e)
        }

    }

  return (
    <div className="row">

        <div className='col-6'>
        <Form onSubmit={ handleSubmit(onSubmit) }>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password",{ required: true })} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>

        </Form>
        </div>
    </div>
  );
}