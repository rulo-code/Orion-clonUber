import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/Services.scss';
import '../assets/styles/Vars.scss';
import Service from './Service';
import standarCar from '../assets/static/standarCar.png';
import premiunCar from '../assets/static/premiunCar.png';
import Locations from './Locations';

const Services = ({
  originValue,
  destinationValue,
  onChange,
  onChange2,
  onSelect,
  onSelect2,
  onClick,
  duration,
}) => {
  return (
    <div className='services'>
      <div className='services__locations'>
        <Locations
          originValue={originValue}
          destinationValue={destinationValue}
          onChange={onChange}
          onChange2={onChange2}
          onSelect={onSelect}
          onSelect2={onSelect2}
        />
      </div>
      <div className='estimatedTime'>
        <i className='fas fa-clock' />
        <p>
          Te llevamos en
          {' '}
          <span>{duration}</span>
        </p>
      </div>
      <div className='services__type'>
        <div className='service active'>
          <h3>Xpress</h3>
          <div className='service__description'>
            <p>Auto basico, precio bajo</p>
            <img src={standarCar} alt='xpress' />
          </div>
          <p className='service__precie'>$ 1000</p>
        </div>
        <div className='service'>
          <h3>Premiun</h3>
          <div className='service__description'>
            <p>Viaja con confort</p>
            <img src={premiunCar} alt='xpress' />
          </div>
          <p className='service__precie'>$ 1200</p>
        </div>

      </div>
      <div className='services__payMethod'>
        <div>
          <i className='fas fa-money-bill' />
          <p>Efectivo</p>
        </div>
        <div>
          <i className='fas fa-cog' />
        </div>
      </div>
      <Link className='btn' onClick={onClick} to='/driverfound'>Confirmar</Link>
    </div>
  );
};
export default Services;
