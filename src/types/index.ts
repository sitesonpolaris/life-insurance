export type InsuranceType = 'term' | 'whole' | 'iul';

export type QuizState = 'not-started' | 'in-progress' | 'completed';

export interface QuizQuestion {
  id: string;
  text: string;
  tooltip?: string;
  options: QuizOption[];
  type: 'single' | 'multiple' | 'slider' | 'text';
}

export interface QuizOption {
  id: string;
  text: string;
  value: string | number;
}

export interface QuizAnswer {
  questionId: string;
  value: string | number | (string | number)[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  weekday: string;
  time: string;
  message: string;
  quiz_answers?: QuizAnswer[];
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  quote: string;
  insuranceType: InsuranceType;
  imageUrl: string;
}

export interface InsuranceRecommendation {
  type: InsuranceType;
  title: string;
  description: string;
  benefits: string[];
  idealFor: string[];
}