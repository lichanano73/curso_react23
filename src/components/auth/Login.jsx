import { useForm } from 'react-hook-form'

export default function Login() {

    const { register ,handleSubmit, formState: {errors} } = useForm()

    const onSubmit = (data)=>{
        alert('Accion de iniciar sesión')
        console.log('Accion de iniciar sesión')
        console.log(data)
    }

  return (
    <div className="row">
        <form onSubmit={ handleSubmit(onSubmit) } className="form">
            <label>Usuario:</label>
            <div className="col-12">                
                <input type="text" {...register("usuario", { required: true })} />
                {
                    errors?.Usuario && <div> Campo obligatorio </div>
                }                
            </div>
            <label>Contraseña</label>
            <div className="col-12">                
                <input type="password" {...register("password",{ required: true })}/>
                {
                    errors?.password && <div> Campo obligatorio </div>
                } 
            </div>
            <button className="btn btn-primary mt-5" type="submit">Login</button>
        </form>
    </div>
  );
}