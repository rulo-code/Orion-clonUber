import React from 'react';
import '../assets/styles/components/FavoriteSites.scss';

const FavoriteSites = () => {
  return (
    <div className='options'>
      <div className='fitMap'>
        <p>Fijar en el mapa</p>
        <i className='fas fa-map-marker-alt' />
      </div>
      <details>
        <summary>Sitios favoritos</summary>
        <ul>
          <li>Casa</li>
          <li>Trabajo</li>
        </ul>
      </details>
    </div>
  );
};
export default FavoriteSites;
