import React from 'react';
import { insuranceTypes } from '../data/insuranceTypes';
import InsuranceProductPage from './InsuranceProductPage';

const TermLifePage: React.FC = () => {
  const product = insuranceTypes.find(type => type.type === 'term')!;
  return <InsuranceProductPage product={product} />;
};

export default TermLifePage;