let id = 0;
class productManager{
    constructor(product=[]){
        this.product=product;
    }
    getproduct(){
        if (this.product.length===0){
            console.log(this.product)
        }
        else{
            console.log("el arreglo tiene datos:", this.product)
        }
    }
    addProduct({title, description, price, thumb, code, stock}){
        if(!title || !description || !price || !thumb || !stock){
            console.log("Error de escritura. Favor de llenar todos los campos")
        }        
        else{
            id++;
            if(this.product.some((product)=>product.code===code)){
                console.log("Codigo Repetido")
            }
            else{
                this.product.push({id, title, description, thumb, code, stock});
            }
        }

    }
    getProductbyId(id){
        if(this.product.find(product=> product.id === id)){
            let show=id-1;
            console.log(this.product[show])
        }
        else{
            console.log("Producto inexistente");
        }
    }
}

const admin = new productManager

console.log("ARREGLO VACIO");
admin.getproduct();

admin.addProduct({
    title: 'cosa',
    description: 'esto es la primer cosa',
    price: 500,
    thumb: 'cosa.jpg',
    code: 't1',
    stock: 5
});
admin.addProduct({
    title: 'coso',
    description: 'esto es la segunda cosa',
    price: 501,
    thumb: 'cos0.jpg',
    code: 't2',
    stock: 5
});
console.log("ESTE PRODUCTO MARCA ERROR DE CODIGO REPETIDO")
admin.addProduct({
    title: 'coson',
    description: 'Esta cosa no se registrara porque tiene el codigo repetido',
    price: 502,
    thumb: 'coson.jpg',
    code: 't2',
    stock: 5
});
console.log("ESTE PRODUCTO MARCA ERROR DE QUE NO ESTAN LLENOS TODOS LOS CAMPOS")
admin.addProduct({
    title: 'cosi',
    description: 'esta cosa marca error porque no tiene stock',
    price: 503,
    thumb: 'cosi.jpg',
    code: 't3',
});
console.log("BUSCA Y MUESTRA EL PRODUCTO CON EL ID 2")
admin.getProductbyId(2);
console.log("BUSCA EL PRODUCTO CON EL ID 12 Y MANDA ERROR DE NO ENCONTRARLO")
admin.getProductbyId(12);
console.log("MUESTRA TODOS LOS PRODUCTOS DENTRO DEL ARREGLO")
admin.getproduct();