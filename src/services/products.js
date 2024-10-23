/*=========Product=========*/
import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persitence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

 
const aceptButton = document.getElementById("aceptButton");
aceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("name").value,
     imagen = document.getElementById("img").value,
     precio = document.getElementById("precio").value,
     categoria = document.getElementById("categoria").value;
    let object = null;
    if(productoActivo){
        object = {
            ... productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        };
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };

    };
    Swal.fire({
        title: "Genial",
        text: "Producto guardado correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();

};

//eliminar elemento

export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "¿Estas seguro que queres eliminar el elemento?",
        text: "Si lo eliminas sera permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=> el.id !== productoActivo.id);
            localStorage.setItem('products', JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }
      });


    


}
