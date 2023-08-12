import firebase from "../config/firebase"

export default function Home(){


    console.log(firebase)

    return(
        <>            
            <div className="row">

                <div className="col-6">
                    <h1>Título de la columna 1</h1>
                    <p>Contenido de la columna 1.</p>
                </div>

                <div className="col-6">
                    <h1>Título de la columna 2</h1>
                    <p>Contenido de la columna 2.</p>
                </div>

            </div>
            
        </>
    )
}