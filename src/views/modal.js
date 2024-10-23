import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

/*=========POPUP=========*/ 
const buttonCancel=document.getElementById("cancelButton");

buttonCancel.addEventListener('click',()=>{
    handlebuttonCancel();
});

const handlebuttonCancel = ()=>{
    closeModal();
}

export const openModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display="flex";
    const deleteButton = document.getElementById("deleteButton");

    if(productoActivo){
        console.log(productoActivo);
        const nombre = document.getElementById("name"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categoria = document.getElementById("categoria");
        nombre.value=productoActivo.nombre;
        imagen.value=productoActivo.imagen;
        precio.value=productoActivo.precio;
        categoria.value=productoActivo.categoria;
        deleteButton.style.display = "block";
    }else{
        deleteButton.style.display = "none";
    }
};
export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display="none";
    setproductoActivo(null);
    resetModal();
};
const resetModal = ()=> {
    const nombre = document.getElementById("name"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
    nombre.value="";
    imagen.value="";
    precio.value=0;
    //categoria.value="Seleccione una categoria";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click",()=>{
    handlebuttonDelete();
});
const handlebuttonDelete = ()=>{
    handleDeleteProduct();
}