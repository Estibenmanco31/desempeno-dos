import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardsProductos from '../components/CardsProductos';
import '../Styles/Productos.css';

const productosData = [
  {
    id: 1,
    title: "Camiseta Básica Urban",
    description: "Algodón 100% orgánico",
    price: "29",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a8 8 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
  },
  {
    id: 2,
    title: "Jeans Slim Fit",
    description: "Denim premium stretch",
    price: "89",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 3h12l1 18h-5l-2-10-2 10H5l1-18z" /><line x1="12" y1="3" x2="12" y2="8" /></svg>
  },
  {
    id: 3,
    title: "Sudadera Oversize",
    description: "Algodón French Terry",
    price: "65",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.38 6.46L16 5a8 8 0 0 1-8 0L3.62 6.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /><path d="M8 5c0-4 8-4 8 0" /><path d="M10 7v3M14 7v3" /></svg>
  },
  {
    id: 4,
    title: "Chaqueta Bomber",
    description: "Nylon resistente al agua",
    price: "120",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 4a4 4 0 0 0-8 0" /><path d="M8 4L3 9l1.5 12h3L9 10" /><path d="M16 4l5 5-1.5 12h-3L15 10" /><path d="M9 10v11h6V10" /><path d="M12 4v17" /></svg>
  },
  {
    id: 5,
    title: "Gorra Snapback",
    description: "Bordado premium",
    price: "25",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 16a6 6 0 0 1 12 0" /><path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z" /><circle cx="12" cy="10" r="1" /></svg>
  },
  {
    id: 6,
    title: "Zapatillas Urban",
    description: "Suela de goma antideslizante",
    price: "95",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 16v-2c0-1.1.9-2 2-2h3l3-3h6c1.1 0 2 .9 2 2v5Z" /><path d="M3 16h18v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3z" /><line x1="12" y1="9" x2="15" y2="12" /><line x1="14" y1="9" x2="17" y2="12" /></svg>
  }
];

const Productos = () => {
  return (
    <div className="productos-page-container">
      <NavBar />
      <div className="productos-page-content">
        <div className="productos-header">
          <h1>NUESTRA COLECCIÓN</h1>
          <p>Estilo urbano para cada ocasión</p>
        </div>
        <div className="productos-grid">
          {productosData.map(prod => (
            <CardsProductos
              key={prod.id}
              title={prod.title}
              description={prod.description}
              price={prod.price}
              icon={prod.icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Productos;
