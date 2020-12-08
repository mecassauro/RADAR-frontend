import React from 'react';
import { ImArrowUp2, ImArrowDown2 } from 'react-icons/im';
import { MiniContainer } from './styles';

function DataInformer({ title, image, alt, quantity, percentage, direction }) {
  return (
    <MiniContainer>
      <div>
        <strong>{title}</strong>
        <img src={image} alt={alt} />
      </div>

      <h1>{quantity}</h1>

      <span>
        {direction === 'up' ? (
          <small style={{ color: '#f80303' }}>
            <ImArrowUp2 size={11} color="#f80303" />
            {percentage}
          </small>
        ) : (
          <small style={{ color: '#04D361' }}>
            <ImArrowDown2 size={11} color="#04D361" />
            {percentage}
          </small>
        )}
        Desde o último mes
      </span>
    </MiniContainer>
  );
}

export default DataInformer;
