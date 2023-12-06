// Desafio 1


//Desarrolla  el constructor con el elemento products, el cual será un array vacio. 

class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    //Se valida que se agregaron todos los campos: 

    addProduct = (title, description, price, thumbnail, code, stock) => {
      if (![title, description, price, thumbnail, code, stock].every(Boolean)) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
    //Se valida que el código sea único: 

      if (this.products.some(product => product.code === code)) {
        console.error("Ya existe un producto con el mismo código");
        return;
      }
    //Se crea un nuevo objeto con los datos: 

      const newProduct = { id: this.productIdCounter++, title, description, price, thumbnail, code, stock };

    //Se agrega al array
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    };
  
    getProducts = () => this.products;
  
    getProductById = id => {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return product;
      } else {
        throw new Error("Producto no encontrado");
      }
    };
  }
  
  //Uso
  const productManager = new ProductManager();
  
  // Verifica que getProducts devuelva un arreglo vacío al inicio
  console.log("Productos al inicio:", productManager.getProducts());
  
  // Agrega un producto
  productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  
  // Verifica que el producto fue agregado satisfactoriamente
  console.log("Productos después de agregar:", productManager.getProducts());
  
  // Intenta agregar el mismo producto (debería arrojar un error)
  productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  
  // Obtiene un producto por ID (debería arrojar un error si no se encuentra)
  const productIdToFind = 1;
  try {
    const foundProduct = productManager.getProductById(productIdToFind);
    console.log(`Producto con ID ${productIdToFind}:`, foundProduct);
  } catch (error) {
    console.error(error.message);
  }
  