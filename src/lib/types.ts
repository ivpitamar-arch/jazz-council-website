export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  imagePosition?: string;
}

export interface DonationTier {
  id: string;
  label: string;
  description: string;
  amount: string;
  highlight?: boolean;
}

export interface ActivityArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}
