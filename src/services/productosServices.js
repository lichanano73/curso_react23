export async function getAll(){

    const busqueda = 'notebook'

    return await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
        .then((res) => res.json())
    
}
export async function getById(id){
    return await fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res) => res.json())
}
export async function getDescriptionById(id){
    return await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((res) => res.json())
}