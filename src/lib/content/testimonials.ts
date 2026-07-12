export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Core Panini is the only consultancy we have worked with where the people who scope the work are the people who build it. The difference shows up in the architecture, and in the result.",
    author: "Catherine Mills",
    role: "Chief Technology Officer",
    company: "A Fortune 500 lender",
  },
  {
    quote:
      "They told us not to do the rewrite. They saved us eighteen months and seven figures. That kind of honesty is rare and worth a great deal.",
    author: "Daniel Foster",
    role: "VP Engineering",
    company: "A Series D scale-up",
  },
  {
    quote:
      "Experienced, low-ego, and accountable. They owned the outcome the way an internal team would. We have engaged them on three programs since.",
    author: "Renata Oliveira",
    role: "Chief Information Officer",
    company: "A regional health system",
  },
  {
    quote:
      "The platform they built is still the foundation of our engineering velocity years later. Few engagements compound like that.",
    author: "Aaron Whitfield",
    role: "SVP Platform Engineering",
    company: "A global manufacturer",
  },
  {
    quote:
      "They speak the language of the board and the language of the terminal in the same meeting. That breadth is what we needed.",
    author: "Mei Lin Zhao",
    role: "Chief Digital Officer",
    company: "A multi-brand retailer",
  },
  {
    quote:
      "Calm, precise, and experienced. The kind of partner you call when the problem is too important to delegate.",
    author: "Hiroshi Sato",
    role: "Founder & CEO",
    company: "A payments fintech",
  },
];
