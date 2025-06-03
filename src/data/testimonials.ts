import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Michael J.',
    age: 34,
    quote: 'As a new father, I wanted to make sure my family would be taken care of if anything happened to me. The quiz helped me understand that term life insurance was perfect for my needs. The process was fast, and I got coverage that fits my budget.',
    insuranceType: 'term',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 't2',
    name: 'Sarah L.',
    age: 42,
    quote: 'I was looking for something that would provide protection but also build value over time. After taking the quiz, I learned that whole life insurance aligned with my long-term goals. Now I have peace of mind and a growing financial asset.',
    insuranceType: 'whole',
    imageUrl: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//Woman%20Testimonial.jpg',
  },
  {
    id: 't3',
    name: 'David R.',
    age: 38,
    quote: 'As a business owner, I needed a flexible solution that could adapt to my changing needs. The quiz recommended an IUL policy, which gives me both protection and an opportunity to build wealth. The consultation helped me understand all the details.',
    insuranceType: 'iul',
    imageUrl: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//Man.webp',
  },
];