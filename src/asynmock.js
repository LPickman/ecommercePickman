const items = [
  {
    id: 0,
    nombre: "Camiseta",
    descripcion: "Camiseta de algodón de alta calidad",
    precio: 19.99,
    categoria: "ropa",
    imagen: "https://via.placeholder.com/200?text=Imagen+1",
    stock: 50,
  },
  {
    id: 1,
    nombre: "Pantalón",
    descripcion: "Pantalón vaquero estilo casual",
    precio: 29.99,
    categoria: "ropa",
    imagen: "https://via.placeholder.com/200?text=Imagen+2",
    stock: 30,
  },
  {
    id: 2,
    nombre: "Remera",
    descripcion: "Remera de algodón blanca",
    precio: 9.99,
    categoria: "ropa",
    imagen: "https://via.placeholder.com/200?text=Imagen+3",
    stock: 50,
  },
  {
    id: 3,
    nombre: "Zapatos",
    descripcion: "Zapatos de cuero negros",
    precio: 49.99,
    categoria: "calzado",
    imagen: "https://via.placeholder.com/200?text=Imagen+4",
    stock: 20,
  },
  {
    id: 4,
    nombre: "Bolso",
    descripcion: "Bolso de mano elegante",
    precio: 39.99,
    categoria: "accesorios",
    imagen: "https://via.placeholder.com/200?text=Imagen+5",
    stock: 15,
  },
  {
    id: 5,
    nombre: "Reloj",
    descripcion: "Reloj de pulsera deportivo",
    precio: 59.99,
    categoria: "accesorios",
    imagen: "https://via.placeholder.com/200?text=Imagen+6",
    stock: 10,
  },
  {
    id: 6,
    nombre: "Gafas de sol",
    descripcion: "Gafas de sol polarizadas",
    precio: 24.99,
    categoria: "accesorios",
    imagen: "https://via.placeholder.com/200?text=Imagen+7",
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
