import { InsuranceRecommendation } from '../types';

export const insuranceTypes: InsuranceRecommendation[] = [
  {
    type: 'term',
    title: 'Term Life Insurance',
    description: 'Provides coverage for a specific period (typically 10, 20, or 30 years) with a fixed premium. If you pass away during the term, your beneficiaries receive the death benefit.',
    benefits: [
      'Most affordable option',
      'Simple to understand',
      'Fixed premiums during the term',
      'Higher coverage amounts for less money',
      'Convertible to permanent insurance (with most policies)',
    ],
    idealFor: [
      'Young families with children',
      'Homeowners with mortgages',
      'Those with temporary financial obligations',
      'People on tight budgets who need maximum coverage',
      'Those who need coverage until retirement',
    ],
  },
  {
    type: 'whole',
    title: 'Whole Life Insurance',
    description: 'Permanent coverage that lasts your entire life with level premiums. Includes a cash value component that grows at a guaranteed rate and can be borrowed against.',
    benefits: [
      'Lifetime coverage',
      'Builds cash value over time',
      'Fixed premiums that never increase',
      'Potential dividends (with participating policies)',
      'Tax-advantaged growth and death benefits',
    ],
    idealFor: [
      'Those wanting lifelong coverage',
      'People seeking guaranteed cash value growth',
      'Individuals with long-term dependents',
      'Those with estate planning needs',
      'Business owners for succession planning',
    ],
  },
  {
    type: 'iul',
    title: 'Indexed Universal Life (IUL)',
    description: 'A flexible permanent policy where cash value growth is tied to market indexes. Offers potential for higher returns than whole life while providing downside protection.',
    benefits: [
      'Potential for higher cash value growth',
      'Downside protection (minimum guaranteed returns)',
      'Flexible premiums and death benefits',
      'Tax-free loans and withdrawals (when structured properly)',
      'Living benefits for chronic illness (in many policies)',
    ],
    idealFor: [
      'Those seeking growth potential with less risk',
      'Individuals maximizing retirement income',
      'People wanting flexible premium options',
      'Those interested in tax-advantaged investments',
      'Business owners for executive benefits',
    ],
  },
  {
    type: 'group',
    title: 'Group Life Insurance',
    description: 'Employer-sponsored life insurance coverage that provides basic protection for employees. Often offered as part of a benefits package with options for additional coverage.',
    benefits: [
      'Guaranteed coverage through employer',
      'No medical exam required',
      'Affordable or free basic coverage',
      'Easy payroll deduction payments',
      'Portable coverage options available',
    ],
    idealFor: [
      'Employees seeking basic coverage',
      'Those with pre-existing conditions',
      'People wanting supplemental coverage',
      'Small business owners and their teams',
      'Those seeking simple enrollment process',
    ],
  }
];