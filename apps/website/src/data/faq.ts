/**
 * FAQ Data — Homepage FAQ section
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const homeFAQs: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'Who can apply to YukthiMantra\'s Academy programmes?',
    answer: 'Our programmes are designed for candidates who are currently pursuing graduation or who have completed graduation (bachelor\'s degree). Working professionals with a graduation degree can also apply. Eligibility is confirmed during the counselling process.',
  },
  {
    id: 'faq-02',
    question: 'What types of programmes does the Academy offer?',
    answer: 'We offer career-focused programmes at the intersection of technology and healthcare. These include Data Analytics, Data Science, Artificial Intelligence, Generative AI, Medical Coding (CPC & CCS preparation), Medical Billing & RCM, Healthcare IT, and integrated pathways.',
  },
  {
    id: 'faq-03',
    question: 'How long are the programmes?',
    answer: 'Programme durations vary from 4–8 weeks for foundation courses to 6–9 months for comprehensive programmes. The exact duration depends on the programme you choose. Check individual programme pages for specific durations.',
  },
  {
    id: 'faq-04',
    question: 'What learning modes are available?',
    answer: 'We offer online, weekend and classroom learning modes. Availability may vary by programme and batch. Contact us for current batch details and learning mode options.',
  },
  {
    id: 'faq-05',
    question: 'Does the Academy provide certification?',
    answer: 'For programmes like CPC and CCS, we provide certification-oriented preparation. The certification examinations themselves are conducted by the respective certifying bodies. Programme-specific details are shared during counselling.',
  },
  {
    id: 'faq-06',
    question: 'What career support does the Academy provide?',
    answer: 'The Academy offers career guidance, portfolio development support, interview preparation, and employer readiness training where operationally available. Career support details are discussed during counselling.',
  },
  {
    id: 'faq-07',
    question: 'How does the counselling process work?',
    answer: 'After you submit your details, our team verifies your eligibility, assesses your background and career goals, and recommends the most suitable programme pathway. This is a free service designed to ensure the right fit.',
  },
  {
    id: 'faq-08',
    question: 'What are the programme fees?',
    answer: 'Contact us for current batch pricing, scholarship eligibility and EMI options. Our counsellors will provide detailed fee information and available offers during the counselling process.',
  },
];
