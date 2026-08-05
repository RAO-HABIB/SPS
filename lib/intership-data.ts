
export interface Phase {
  id: string;
  title: string;
  desc: string;
  image: string;
}


export const phases: Phase[] = [
  { 
    id: 'Phase 1', 
    title: 'Trainee', 
    desc: 'Participants receive foundational training on various processes and practices, preparing them for real-world applications.',
    image: '/internship/phase1.webp' 
  },
  { 
    id: 'Phase 2', 
    title: 'Developer', 
    desc: 'Interns transition into a role with direct tasks & responsibilities, contributing to real project deliverables.',
    image: '/internship/phase2.webp' 
  },
  { 
    id: 'Phase 3', 
    title: 'Associate', 
    desc: 'Upon successful completion, candidates move to a more advanced role with higher responsibilities.',
    image: '/internship/phase3.webp' 
  },
  { 
    id: 'Phase 4', 
    title: 'Full Time / Alumni', 
    desc: 'High performers may receive full-time job offers, continuing their professional journey with us.',
    image: '/internship/phase4.webp' 
  },
];