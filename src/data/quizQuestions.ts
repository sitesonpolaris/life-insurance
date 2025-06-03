import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'What is your age?',
    tooltip: "Your age helps determine the type and cost of life insurance that's best for you.",
    type: 'single',
    options: [
      { id: 'q1-1', text: 'Under 30', value: 'under-30' },
      { id: 'q1-2', text: '30-39', value: '30-39' },
      { id: 'q1-3', text: '40-49', value: '40-49' },
      { id: 'q1-4', text: '50-59', value: '50-59' },
      { id: 'q1-5', text: '60 or older', value: '60-plus' },
    ],
  },
  {
    id: 'q2',
    text: 'Do you have any dependents?',
    tooltip: 'Dependents are people who rely on your income, like children or a spouse.',
    type: 'multiple',
    options: [
      { id: 'q2-1', text: 'Spouse/Partner', value: 'spouse' },
      { id: 'q2-2', text: 'Children under 18', value: 'young-children' },
      { id: 'q2-3', text: 'Adult children', value: 'adult-children' },
      { id: 'q2-4', text: 'Aging parents', value: 'parents' },
      { id: 'q2-5', text: 'No dependents', value: 'none' },
    ],
  },
  {
    id: 'q3',
    text: 'What is your primary goal for life insurance?',
    tooltip: 'Different types of insurance serve different purposes.',
    type: 'single',
    options: [
      { id: 'q3-1', text: 'Replace income if I pass away', value: 'income-replacement' },
      { id: 'q3-2', text: 'Cover funeral expenses', value: 'funeral-expenses' },
      { id: 'q3-3', text: 'Pay off debts (mortgage, loans)', value: 'debt-payment' },
      { id: 'q3-4', text: 'Leave an inheritance', value: 'inheritance' },
      { id: 'q3-5', text: 'Build cash value over time', value: 'cash-value' },
    ],
  },
  {
    id: 'q4',
    text: 'How would you describe your health?',
    tooltip: 'Your health status affects your premium rates.',
    type: 'single',
    options: [
      { id: 'q4-1', text: 'Excellent', value: 'excellent' },
      { id: 'q4-2', text: 'Good', value: 'good' },
      { id: 'q4-3', text: 'Average', value: 'average' },
      { id: 'q4-4', text: 'Below Average', value: 'below-average' },
      { id: 'q4-5', text: 'Poor', value: 'poor' },
    ],
  },
  {
    id: 'q5',
    text: 'How much coverage do you think you need?',
    tooltip: 'A common recommendation is 10-15 times your annual income.',
    type: 'single',
    options: [
      { id: 'q5-1', text: 'Less than $100,000', value: '<100k' },
      { id: 'q5-2', text: '$100,000 - $250,000', value: '100k-250k' },
      { id: 'q5-3', text: '$250,000 - $500,000', value: '250k-500k' },
      { id: 'q5-4', text: '$500,000 - $1,000,000', value: '500k-1m' },
      { id: 'q5-5', text: 'More than $1,000,000', value: '>1m' },
    ],
  },
  {
    id: 'q6',
    text: 'How long do you need coverage for?',
    tooltip: 'Term insurance covers a specific period, while permanent insurance lasts your lifetime.',
    type: 'single',
    options: [
      { id: 'q6-1', text: '10-20 years (until kids are grown)', value: '10-20-years' },
      { id: 'q6-2', text: '20-30 years (until mortgage is paid)', value: '20-30-years' },
      { id: 'q6-3', text: 'Lifetime coverage', value: 'lifetime' },
      { id: 'q6-4', text: 'Not sure', value: 'unsure' },
    ],
  },
  {
    id: 'q7',
    text: 'Are you interested in using life insurance as an investment vehicle?',
    tooltip: 'Some policies build cash value that you can access during your lifetime.',
    type: 'single',
    options: [
      { id: 'q7-1', text: 'Yes, very interested', value: 'very-interested' },
      { id: 'q7-2', text: 'Somewhat interested', value: 'somewhat' },
      { id: 'q7-3', text: 'No, just want protection', value: 'protection-only' },
      { id: 'q7-4', text: 'I need more information', value: 'need-info' },
    ],
  }
];