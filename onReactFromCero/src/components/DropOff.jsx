import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/DropOff.scss';

import Locations from './Locations';

const DropOff = ({
  originValue,
  destinationValue,
  onChange,
  onChange2,
  onSelect,
  onSelect2,
  onClick,
}) => {
  return (
    <div className='dropOff'>
      <Locations
        originValue={originValue}
        destinationValue={destinationValue}
        onChange={onChange}
        onChange2={onChange2}
        onSelect={onSelect}
        onSelect2={onSelect2}
      />
      <Link className='btn' onClick={onClick} to='/service'>Viajar</Link>
    </div>
  );
};
export default DropOff;
