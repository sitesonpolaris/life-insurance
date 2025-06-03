import React from 'react';
import { insuranceTypes } from '../data/insuranceTypes';
import InsuranceProductPage from './InsuranceProductPage';

const GroupLifePage: React.FC = () => {
  const product = insuranceTypes.find(type => type.type === 'group')!;
  return <InsuranceProductPage product={product} />;
};

export default GroupLifePage;