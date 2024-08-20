const items = [
  {
    id: 0,
    nombre: "Camiseta",
    descripcion: "Camiseta de algodón de alta calidad",
    precio: 19.99,
    categoria: "ropa",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_846116-MLA31035477403_062019-O.webp",
    stock: 50,
  },
  {
    id: 1,
    nombre: "Pantalón",
    descripcion: "Pantalón vaquero estilo casual",
    precio: 29.99,
    categoria: "ropa",
    imagen:
      "https://celadasa.vtexassets.com/arquivos/ids/245263-800-auto?v=638357461507670000&width=800&height=auto&aspect=true",
    stock: 30,
  },
  {
    id: 2,
    nombre: "Remera",
    descripcion: "Remera de algodón blanca",
    precio: 9.99,
    categoria: "ropa",
    imagen:
      "https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-640-0.jpg",
    stock: 50,
  },
  {
    id: 3,
    nombre: "Zapatos",
    descripcion: "Zapatos de cuero negros",
    precio: 49.99,
    categoria: "calzado",
    imagen:
      "https://equipovallejo.vtexassets.com/arquivos/ids/257832-800-auto?v=638301436097000000&width=800&height=auto&aspect=true",
    stock: 20,
  },
  {
    id: 4,
    nombre: "Bolso",
    descripcion: "Bolso de mano elegante",
    precio: 39.99,
    categoria: "accesorios",
    imagen:
      "https://d368r8jqz0fwvm.cloudfront.net/7401-product_lg/bolso-para-viaje-trango-ii-new-60-lts.jpg",
    stock: 15,
  },
  {
    id: 5,
    nombre: "Reloj",
    descripcion: "Reloj de pulsera deportivo",
    precio: 59.99,
    categoria: "accesorios",
    imagen:
      "https://www.bidcom.com.ar/publicacionesML/productos/RELMO009/1000x1000-RELMO009.jpg",
    stock: 10,
  },
  {
    id: 6,
    nombre: "Gafas de sol",
    descripcion: "Gafas de sol polarizadas",
    precio: 24.99,
    categoria: "accesorios",
    imagen: "https://m.media-amazon.com/images/I/51UFqgNG3jL._AC_SL1500_.jpg",
    stock: 25,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 500);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((e) => e.id === id * 1));
    }, 500);
  });
};
