
export interface Movie {
  title: string;
  status: 'Released' | 'Upcoming';
  image: string;
  category: string;
  director?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyDetail {
  icon: string;
  label: string;
  value: string;
  link?: string;
}
