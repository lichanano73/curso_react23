import firebase from '../config/firebase';

export const fireRegister = async(data)=>{
    console.log(firebase)
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)

    if(responseUser.user.uid){
        const document = await firebase.firestore().collection("usuarios").add({
            nombre: data.nombre,
            apellido: data.apellido,
            dni: data.dni,
            fecha_nac: data.fecha_nac,
            sexo: data.sexo,
            userId: responseUser.user.uid
        })
        return document
    }
}

export const fireLogin = async (data)=>{
    const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

    console.log('responseUser')
    console.log(responseUser.user.uid)
    if (responseUser.user.uid){
        console.log(`Por buscar UserId ${responseUser.user.uid}`)
        const document = await firebase.firestore().collection("usuarios")
            .where("userId","=",responseUser.user.uid).get();

        console.log(document)
        return document
    }
    return{}
}