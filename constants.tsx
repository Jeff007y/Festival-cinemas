
import React from 'react';
import { Mail, Phone, MapPin, Calendar, Globe, Briefcase, Film, PenTool, ShoppingBag, Lightbulb } from 'lucide-react';
import { Movie, NavItem, CompanyDetail } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Production', href: '#production' },
  { label: 'Distribution', href: '#distribution' },
  { label: 'Studio & Vision', href: '#studio' },
  { label: 'Contact', href: '#contact' },
];

export const FOUNDERS = [
  {
    name: "Rathish Ambat",
    role: "Director & Producer",
    description: "Rathish Ambat is an Indian film director, Ad film director, and producer who works predominantly in the Malayalam film industry. He is well known for his debut film Kammara Sambhavam which was released on 14 April 2018.",
    image: "https://lh3.googleusercontent.com/d/1PGu0cipYd4OUSTQ5wYUk4diMR8IYkOpz"
  },
  {
    name: "Renjith Paul",
    role: "Producer",
    description: "Renjith Paul, the owner of the largest exhibition network in Kerala under the brand name EVM",
    image: "https://lh3.googleusercontent.com/d/1U1ADo6NiN4XfYsePb8zOAzy2iWHezsRI"
  },
  {
    name: "Jojo Jose",
    role: "Producer",
    description: "Over 15 years of extensive experience in film production, distribution, and content development. Part of several successful projects that brought together some of the most talented creative minds in the industry.",
    image: "https://lh3.googleusercontent.com/d/1dvWbYSA_xwxPnqprrkZN-bw3-Lo9aO9l"
  }
];

export const MOVIES: Movie[] = [
  { 
    title: 'RONTH', 
    status: 'Released', 
    image: 'https://lh3.googleusercontent.com/d/16j1UO142OLlddal0_4T9R--Ly83xZlfU',
    category: 'Production and Distribution',
    director: 'Shahi Kabir'
  },
  { 
    title: 'ATHIRADI', 
    status: 'Upcoming', 
    image: 'https://lh3.googleusercontent.com/d/1D4DyEXvtvzmNCR12gP3-AIfn4C_vXngp',
    category: 'Distribution',
    director: 'Arun Anirudhan'
  },
  { 
    title: 'KARIKKU', 
    status: 'Upcoming', 
    image: 'https://lh3.googleusercontent.com/d/1txbPlRXzLJpcK1NNs2z9dQyUHuWpFhXM',
    category: 'Distribution',
    director: 'Nikhil Prasad'
  },
];

export const COMPANY_DETAILS: CompanyDetail[] = [
  { icon: 'globe', label: 'Website', value: 'www.festivalcinemas.in', link: 'https://www.festivalcinemas.in' },
  { icon: 'phone', label: 'Phone', value: '9860555778', link: 'tel:9860555778' },
  { icon: 'briefcase', label: 'Industry', value: 'Entertainment Providers' },
  { icon: 'film', label: 'Specialties', value: 'Film Production, Storytelling, Content Creation' },
  { icon: 'map-pin', label: 'Headquarters', value: 'Kochi, Kerala', link: 'https://maps.app.goo.gl/qGyKsyRWTRfHgw2r5' },
  { icon: 'calendar', label: 'Founded', value: '2022' },
];

export const VISION_CONTENT = {
  headline: "Crafting Tomorrow's Classics",
  subheadline: "Our commitment to the art of cinema is unwavering. We don't just produce films; we curate experiences that linger long after the credits roll.",
  pillars: [
    {
      title: "Elevated Storytelling",
      content: "We believe a great film starts with a soul-stirring narrative. Our mission is to find stories that challenge the status quo and celebrate the human spirit."
    },
    {
      title: "Technical Excellence",
      content: "From pre-production to the final color grade, we employ world-class talent and technology to ensure every frame meets the highest cinematic standards."
    },
    {
      title: "Cultural Resonance",
      content: "Deeply rooted in Kerala's rich heritage, we aim to take local stories to a global audience, proving that the more specific a story is, the more universal it becomes."
    }
  ]
};

export const STUDIO_VISION_CONTENT = {
  philosophy: VISION_CONTENT,
  studio: {
    headline: "The Content Studio",
    subheadline: "Festival Cinemas understands the significance of quality content. Our studio is dedicated to narratives for houses ready for execution.",
    features: [
      { icon: <PenTool size={24} />, title: 'Storytelling', desc: 'Developing narratives that resonate globally.' },
      { icon: <ShoppingBag size={24} />, title: 'Sales', desc: 'Connecting visionaries with executed scripts.' },
      { icon: <Lightbulb size={24} />, title: 'Strategy', desc: 'Crafting content across languages and borders.' },
    ]
  }
};

export const ICON_MAP: Record<string, any> = {
  globe: Globe,
  phone: Phone,
  briefcase: Briefcase,
  film: Film,
  'map-pin': MapPin,
  calendar: Calendar,
  mail: Mail,
};
