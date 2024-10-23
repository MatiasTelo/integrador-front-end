
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    }else{
        return[];
    }
};

//Guardar en localStorage

//recibir un producto

export const setInLocalStorage = (productIn) =>{
    //traer los elementos
    let productsInLocal = handleGetProductLocalStorage();
    
    const existingIndex = productsInLocal.findIndex((productsLocal)=> productsLocal.id===productIn.id)
    //verificar si existe el elemento
    if(existingIndex !== -1){
        productsInLocal[existingIndex]=productIn;
    }else{
        productsInLocal.push(productIn);

    }
    localStorage.setItem('products', JSON.stringify(productsInLocal));
}