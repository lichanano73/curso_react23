import firebase from '../config/firebase';


export const fireRegister = async(data)=>{
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)

    if(responseUser.user.uid){
        const document = await firebase.firestore().collection('usuarios').add({
            nombre: data.nombre,
            apellido: data.apellido,
            userId: responseUser.user.uid
        })
        return document
    }

    return responseUser
}