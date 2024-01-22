class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios. Producto no añadido.");
            return;
        }
        if (this.products.some(product => product.code === code)) {
            console.error(`Ya existe un producto con el código: '${code}'. Producto no añadido.`);
            return;
        }
        const newProduct = {
            id: this.nextId++,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }
        this.products.push(newProduct);
        console.log(`Producto "${title}" añadido correctamente.`);
    }

    getProducts() {
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        return product !== undefined ? product : (console.error('Not Found'), null);
    }
}

/* const productManager = new ProductManager();
productManager.getProducts();
productManager.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25 );
productManager.getProducts();
productManager.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25 );
productManager.getProductById(6);
 */


