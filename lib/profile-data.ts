export type TeamProfile = {
  slug: string
  name: string
  role: string
  location: string
  experience: string
  placements: string
  satisfaction: string
  bio: string
  focusAreas: string[]
}

export const teamProfiles: TeamProfile[] = [
  {
    slug: 'amber-stewart',
    name: 'Amber Stewart',
    role: 'Senior Talent Partner',
    location: 'Amsterdam, Netherlands',
    experience: '10 years',
    placements: '25 successful placements',
    satisfaction: '98% client satisfaction',
    bio: 'Amber leads leadership and product hiring across distributed teams. She supports end-to-end hiring plans from role intake to onboarding.',
    focusAreas: ['Leadership Hiring', 'Product Teams', 'Global Remote Hiring', 'Interview Strategy'],
  },
  {
    slug: 'jake-mullock',
    name: 'Jake Mullock',
    role: 'Technical Recruiter',
    location: 'Berlin, Germany',
    experience: '5 years',
    placements: '13 successful placements',
    satisfaction: '95% client satisfaction',
    bio: 'Jake focuses on engineering and platform hiring. He works closely with teams to balance speed, quality, and candidate experience.',
    focusAreas: ['Software Engineering', 'DevOps Roles', 'Talent Mapping', 'Offer Management'],
  },
  {
    slug: 'jennifer-belle',
    name: 'Jennifer Belle',
    role: 'Recruitment Consultant',
    location: 'Dublin, Ireland',
    experience: '8 years',
    placements: '17 successful placements',
    satisfaction: '96% client satisfaction',
    bio: 'Jennifer supports scaling teams with structured sourcing and screening workflows. She drives consistent shortlist quality for growth-stage hiring.',
    focusAreas: ['Growth Hiring', 'Candidate Screening', 'Pipeline Strategy', 'Hiring Operations'],
  },
  {
    slug: 'jon-bell',
    name: 'Jon Bell',
    role: 'Data Scientist',
    location: 'Remote',
    experience: '7 years',
    placements: '12 high-impact projects',
    satisfaction: '9/10 job satisfaction',
    bio: 'Jon specializes in analytics and machine learning workflows. He builds data products that improve business decisions and forecasting.',
    focusAreas: ['Machine Learning', 'Analytics', 'Experimentation', 'Data Platforms'],
  },
  {
    slug: 'eniola-bakare',
    name: 'Eniola Bakare',
    role: 'QA Tester',
    location: 'Remote',
    experience: '6 years',
    placements: '18 released products',
    satisfaction: '10/10 job satisfaction',
    bio: 'Eniola drives quality across fast-moving delivery teams with reliable test strategies and release validation processes.',
    focusAreas: ['Test Automation', 'Regression Planning', 'Release Quality', 'Product QA'],
  },
  {
    slug: 'sarah-maplas',
    name: 'Sarah Maplas',
    role: 'Software Developer',
    location: 'Remote',
    experience: '8 years',
    placements: '16 completed engagements',
    satisfaction: '8/10 job satisfaction',
    bio: 'Sarah builds modern web products with a focus on strong UX and maintainable front-end architecture.',
    focusAreas: ['Frontend Engineering', 'UI Architecture', 'Accessibility', 'Performance'],
  },
]

export function getProfileBySlug(slug: string) {
  return teamProfiles.find((profile) => profile.slug === slug)
}
