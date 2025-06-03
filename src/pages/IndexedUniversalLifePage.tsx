import React from 'react';
import { insuranceTypes } from '../data/insuranceTypes';
import InsuranceProductPage from './InsuranceProductPage';

const IndexedUniversalLifePage: React.FC = () => {
  const product = insuranceTypes.find(type => type.type === 'iul')!;
  return <InsuranceProductPage product={product} />;
};

export default IndexedUniversalLifePage;