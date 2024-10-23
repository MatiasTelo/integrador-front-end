//======STORE======

import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persitence/localstorage";
import { openModal } from "./modal";
// se encarga de traer los elementos y llamar al render
export const handleGetProductsToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);

}
//se encarga de filtrar y renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productIn)=>{
    //filtrado de arrays por categoria
    const burgers = productIn.filter((el)=> el.categoria === "Hamburguesas");
    const papas = productIn.filter((el)=> el.categoria === "Papas");
    const gaseosas = productIn.filter((el)=> el.categoria === "Gaseosas");
    //renderiza los elementos de la seccion
    const renderProductGroup =(productos,title)=>{
        if(productos.length>0){
            const productosHTML = productos.map((producto,index)=>{
                return `<div class='containerTargetItem' id='product-${producto.categoria}-${index}'>
                <div>
                <img src=${producto.imagen} />
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                </div>

                </div>
                
                
                </div>`;
            });
            //retorna la seccion con todos los elementos dentro
            return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
                <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>
            ${productosHTML.join("")}
            </div>
            
            </section>
            
            `;
        }else{
            return "";
        }
    };

    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${renderProductGroup(burgers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;
    //añaden los eventos de manera dinamica
    const addEvents = (productIn)=>{
        if(productIn){
            productIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categoria}-${index}`);
                productContainer.addEventListener('click',()=>{
                    setproductoActivo(element);
                    openModal();
                });
            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);

};