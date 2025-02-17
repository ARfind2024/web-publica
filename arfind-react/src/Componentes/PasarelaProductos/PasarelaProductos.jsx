import React, { useState } from 'react';
import ProductCard from '../../Pages/PasarelaProductos/ProductCard/ProductCard'; // Asegúrate de que la ruta sea correcta
import './PasarelaProductos.css';

const PasarelaProductos = ({ products, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 25; // Ajusta esto según el ancho de tus tarjetas en porcentaje
  const spacing = 10; // Espacio en porcentaje entre tarjetas
  const moveAmount = cardWidth + spacing;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = Math.ceil(products.length * (cardWidth + spacing) / 100) - 1;
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const showArrows = products.length > 4; // Mostrar flechas solo si hay más de 4 tarjetas

  return (
    <div className="pasarela-container" style={{ height }}>
      {showArrows && (
        <button className="arrow-btn left" onClick={handlePrev}>
          <img src="/images/arrow1.png" alt="Anterior" />
        </button>
      )}
      <div className="pasarela-products">
        <div
          className="products-wrapper"
          style={{ transform: `translateX(-${currentIndex * moveAmount}%)` }}
        >
          {products.map((producto, index) => (
            <ProductCard
              key={producto.id || index} // Usa el ID del producto como clave, si existe
              id={producto.id} // Pasa el ID del producto a ProductCard
              title={producto.titulo}
              description={producto.tiny_descripcion}
              imageSrc={producto.imagen}
            />
          ))}
        </div>
      </div>
      {showArrows && (
        <button className="arrow-btn right" onClick={handleNext}>
          <img src="/images/arrow2.png" alt="Siguiente" />
        </button>
      )}
    </div>
  );
};

export default PasarelaProductos;
