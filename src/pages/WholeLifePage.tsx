import React from 'react';
import { insuranceTypes } from '../data/insuranceTypes';
import InsuranceProductPage from './InsuranceProductPage';

const WholeLifePage: React.FC = () => {
  const product = insuranceTypes.find(type => type.type === 'whole')!;
  return <InsuranceProductPage product={product} />;
};

export default WholeLifePage;