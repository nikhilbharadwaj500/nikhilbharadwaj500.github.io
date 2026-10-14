import {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  SkillCategory,
  AchievementItem,
  StatItem
} from '../models/portfolio.model';

export const PERSONAL_INFO = {
  name: 'Nikhil Bharadwaj',
  title: 'Senior Software Engineer',
  roles: [
    'Senior Software Engineer',
    'Full-Stack Architect',
    'Angular & Spring Boot Specialist'
  ],
  email: 'nikhil.bharadwaj619@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikhil-bharadwaj-b78357170/',
  github: 'https://github.com/nikhilbharadwaj500',
  resumeUrl: 'Nikhil_Bharadwaj_Resume.pdf',
  avatarUrl: 'images/myself.jpg',
  aboutImgUrl: 'images/about.jpg',
  location: 'Bengaluru, India (Remote)',
  summary: `Senior Software Engineer with 5+ years of experience architecting resilient distributed systems, high-throughput Multi-Client runtimes, and versatile Multi-Auth security strategies. Specialized in Java, Spring Boot, and modern Angular applications across healthcare diagnostics, insurtech policy engines, and global 3PL/EDI integration ecosystems.`
};

export const QUICK_STATS: StatItem[] = [
  {
    label: 'Years of Experience',
    value: '5+',
    description: 'Enterprise & startup systems'
  },
  {
    label: 'Production Systems',
    value: '4+',
    description: 'Multi-client integration hubs, dashboards & fintech'
  },
  {
    label: 'Tech Stacks Mastered',
    value: '14+',
    description: 'Angular, Spring Boot, Cloud & SFTP'
  },
  {
    label: 'Published Research',
    value: '1',
    description: 'SR-CNN Deep Learning in IJSART'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'cnz-consultants',
    role: 'Senior Software Engineer',
    company: 'CNZ Consultants',
    period: 'June 2025 – Present',
    isCurrent: true,
    location: 'Remote (New Zealand & Australia Clients)',
    projectName: 'Enterprise Multi-Tenant Integration Platform, Operational Dashboard & Corporate Web Portal',
    highlightsBadge: 'Full Codebase Ownership & Architecture',
    shortDescription: 'Architected multi-tenant integration runtimes with 35+ automated schedulers, an Angular operational dashboard, SFTP servers, and official web portal across 25+ global clients.',
    technologies: [
      'Angular',
      'Java',
      'Spring Boot',
      'Multi-Auth Handling',
      'Multi-Client & Multi-Tenant Architecture',
      '3PL Integrations',
      'EDI',
      'Accounting Integrations',
      'E-Commerce Integrations',
      'Render Cloud',
      'Docker',
      'SFTP Server Administration',
      'Microsoft Graph API',
      'Cron Schedulers'
    ],
    description: 'Held complete end-to-end engineering ownership of the enterprise integration ecosystem across its entire lifecycle, architecting resilient multi-client handling and multi-tenant scheduled sync engines across 25+ global client organizations. Built a robust backend supporting dynamic Multi-Auth Handling, 3PL integrations, EDI pipelines, accounting syncs, and e-commerce platforms. Developed the real-time Angular Integration Dashboard for operational visibility, modernized the corporate web presence from WordPress to Angular, and provisioned hardened cloud and SFTP infrastructure.',
    responsibilities: [
      'Held complete end-to-end engineering and codebase ownership of the enterprise integration ecosystem across its entire lifecycle, architecting scalable multi-client handling patterns, dynamic credential resolvers, and secure multi-tenant data segregation.',
      'Designed and engineered a versatile backend Multi-Auth Handling engine supporting diverse authentication protocols (OAuth2, Md5Query, MultiHeaderAuth, HMAC, and API keys) tailored per client and vendor requirement.',
      'Engineered high-throughput Multi-Client handling architectures with 35+ automated integration schedulers and cron execution engines bridging 3PL Integrations, EDI systems, E-Commerce platforms, and Accounting Integrations across 25+ client organizations.',
      'Architected and delivered the live Angular Integration Dashboard on Render, featuring Executive KPI tracking, multi-domain pipeline steppers (Received ➔ Validated ➔ WMS ➔ Dispatched), root-cause bottleneck categorization (Missing SKU, Invalid Address, Holds), and 1-click payload inspection drawers.',
      'Re-architected the corporate web presence by migrating the official company website from legacy WordPress into a responsive, high-performance Angular application deployed on Render with modern component architecture and SEO optimization.',
      'Provisioned, hardened, and maintained dedicated SFTP servers for high-volume automated 3PL data ingestion and EDI file exchanges, ensuring robust error recovery and file reconciliation.',
      'Configured cloud infrastructure on Render using Docker containerization, zero-trust secrets management, environment variable isolation, and automated health checks.',
      'Built automated failure recovery and telemetry alerts using Microsoft Graph API with Azure AD to dispatch instant actionable exception diagnostics to engineering and support teams.'
    ]
  },
  {
    id: 'digit-insurance',
    role: 'Software Engineer',
    company: 'Digit Insurance',
    period: 'October 2022 – May 2025',
    isCurrent: false,
    location: 'Bengaluru, India',
    projectName: 'Motor Single Page Platform & Motor Bulk Loader (DigitPlus)',
    highlightsBadge: 'Tech Titan Award Winner',
    shortDescription: 'Engineered high-concurrency motor insurance platforms using Spring Boot & Angular; maintained 99.9% uptime with sub-second policy generation.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Dynatrace', 'DBeaver', 'Microservices', 'REST APIs'],
    award: 'Tech Titan Award: Recognized for technical excellence, platform innovation, and high-concurrency delivery',
    description: 'Spearheaded full-stack engineering and distributed systems optimization for Digit Insurance’s core motor policy issuance platforms, powering seamless retail customer journeys and large-scale enterprise fleet uploads with 99.9% availability.',
    responsibilities: [
      'Architected and implemented responsive, reactive Single Page Application (SPA) workflows in Angular, streamlining end-to-end motor insurance policy generation and reducing user drop-off.',
      'Engineered the high-throughput Motor Bulk Loader platform in Spring Boot, orchestrating batch policy issuance for thousands of vehicles with optimized ACID PostgreSQL transactions and asynchronous job queues.',
      'Monitored production microservices, distributed traces, and throughput bottlenecks utilizing Dynatrace APM, proactively diagnosing latency spikes and ensuring 99.9% platform availability.',
      'Collaborated closely with actuaries and product teams to translate complex vehicle rating matrices, dynamic add-on rules, and underwriting logic into maintainable, performant backend services.',
      'Conducted rigorous unit and integration testing, code reviews, and schema migrations using DBeaver and relational database optimization techniques.'
    ]
  },
  {
    id: 'beckman-coulter',
    role: 'Developer Intern',
    company: 'Beckman Coulter',
    period: 'August 2021 – August 2022',
    isCurrent: false,
    location: 'Bengaluru, India',
    projectName: 'BCS Sustenance (BOND Pathology Diagnostic Instrument Software)',
    highlightsBadge: 'Innovation Hackathon Winner',
    shortDescription: 'Developed safety-critical diagnostic UI workflows and relational persistence for automated pathology slide-staining instruments.',
    technologies: ['C# .NET', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Visual Studio', 'IIS Express', 'Diagnostic Protocols'],
    award: 'Corporate Hackathon Winner: Designed and prototyped the intelligent BOND Diagnostic Assistant Chatbot',
    description: 'Contributed to the mission-critical BOND medical diagnostic software suite—an advanced automated slide-staining instrument platform engineered in C# .NET with PostgreSQL, operating under stringent medical device reliability and regulatory standards.',
    responsibilities: [
      'Engineered and modernized diagnostic user interface components, diagnosing customer-reported anomalies and delivering verified, regression-tested software patches.',
      'Collaborated with clinical and pathology domain specialists to validate hardware-software instrument communication and slide-staining workflow safety.',
      'Spearheaded the design and full-stack prototyping of an intelligent BOND Chatbot in the company hackathon, winning top honors for empowering lab technicians with conversational troubleshooting.',
      'Maintained thorough verification documentation, schema maintenance, and automated tests adhering to global healthcare quality compliance.'
    ]
  },
  {
    id: 'xon-labs',
    role: 'Software Engineering Intern',
    company: 'Xon Labs (P) Ltd.',
    period: 'August 2019 – October 2019',
    isCurrent: false,
    location: 'Bengaluru, India',
    projectName: 'High-Throughput Parallel AES (Advanced Encryption Standard)',
    highlightsBadge: 'Cloud & Parallel Computing',
    shortDescription: 'Built multi-threaded parallel AES encryption engines deployed on AWS EC2 for high-speed enterprise file security.',
    technologies: ['Java', 'Multi-Threading', 'AWS EC2', 'Apache Tomcat', 'Java Swing', 'Cryptography'],
    description: 'Engineered a high-performance cryptographic data processing engine in Java, maximizing multi-core CPU parallel execution for accelerated encryption of large enterprise files.',
    responsibilities: [
      'Designed and implemented multi-threaded AES parallel chunk processing pipelines in Java, reducing encryption latency for enterprise file payloads by maximizing multi-core CPU utilization.',
      'Developed a responsive desktop graphical interface using Java Swing and deployed web verification endpoints on AWS EC2 instances running Apache Tomcat.',
      'Conducted performance benchmarks analyzing memory overhead, thread pool contention, and throughput metrics across varying file sizes.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    icon: 'layout',
    skills: [
      { name: 'Angular, TypeScript & JavaScript', level: 'Advanced', highlight: true },
      { name: 'Reactive Forms, RxJS & State Signals', level: 'Advanced', highlight: true },
      { name: 'Modern SCSS & Responsive Architecture', level: 'Advanced', highlight: true },
      { name: 'Legacy Web Modernization & SPA Migration', level: 'Advanced', highlight: true }
    ]
  },
  {
    category: 'Backend Architecture',
    icon: 'server',
    skills: [
      { name: 'Java & Spring Boot Framework', level: 'Advanced', highlight: true },
      { name: 'Multi-Auth Handling', level: 'Advanced', highlight: true },
      { name: 'Multi-Client & Multi-Tenant Routing', level: 'Advanced', highlight: true },
      { name: '3PL, EDI & E-Commerce Integrations', level: 'Advanced', highlight: true }
    ]
  },
  {
    category: 'Cloud, Secrets & Databases',
    icon: 'database',
    skills: [
      { name: 'Cloud Deployments & Secrets (Render)', level: 'Advanced', highlight: true },
      { name: 'SFTP Server Admin & Data Pipelines', level: 'Advanced', highlight: true },
      { name: 'Relational DBs (PostgreSQL, MySQL & DBeaver)', level: 'Advanced', highlight: true },
      { name: 'Containerization & Cloud (Docker & AWS EC2)', level: 'Advanced', highlight: true }
    ]
  },
  {
    category: 'APM, Observability & Delivery',
    icon: 'cpu',
    skills: [
      { name: 'Dynatrace APM & Performance Tracing', level: 'Advanced', highlight: true },
      { name: 'Version Control (Git & GitHub Actions)', level: 'Advanced', highlight: true },
      { name: 'Agile Project Delivery (Trello & Jira)', level: 'Advanced', highlight: true },
      { name: 'CI/CD Pipelines (TeamCity & Automation)', level: 'Advanced', highlight: true }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cnz-integrations-platform',
    title: 'CNZ Multi-Tenant Integration Hub & Operations Dashboard',
    period: '2025 – Present',
    category: 'Enterprise',
    featured: true,
    description: 'Multi-tenant enterprise platform pairing automated Spring Boot schedulers with a reactive Angular operations dashboard to sync orders and inventory across ERP, eCommerce, and 3PL networks.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'Multi-Auth Handling', 'Multi-Client', '3PL Integrations', 'EDI', 'Render Cloud'],
    highlights: [
      'Engineered multi-client scheduled sync microservices in Java & Spring Boot connecting 3PL, EDI, E-Commerce & Accounting systems.',
      'Implemented versatile backend Multi-Auth Handling engine supporting dynamic authentication strategies across diverse vendor endpoints.',
      'Architected live Angular dashboard to monitor job health, inspect sync logs & trigger manual runs.',
      'Configured automated Render cloud deployments, multi-tenant secret isolation & secure SFTP servers.'
    ]
  },
  {
    id: 'cnz-official-website',
    title: 'CNZ Consultants Official Corporate Website',
    period: '2025 – 2026',
    category: 'Full-Stack',
    featured: true,
    description: 'Modern corporate web presence migrated from legacy WordPress to a high-performance Angular Single Page Application with responsive UX and automated cloud delivery.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Render Cloud', 'Responsive Design'],
    highlights: [
      'Architected complete WordPress-to-Angular SPA migration, significantly boosting load speed and SEO.',
      'Built modular, responsive UI components utilizing modern SCSS and mobile-first architecture.',
      'Configured automated production hosting and continuous deployment pipelines via Render cloud.'
    ],
    link: 'https://cnzconsultants.co.nz/',
    linkText: 'Visit Live Website'
  },
  {
    id: 'digit-motor-platform',
    title: 'Motor Single Page & Bulk Policy Processing Engine',
    period: '2022 – 2025',
    category: 'Enterprise',
    featured: true,
    description: 'High-throughput commercial insurance issuance platform engineered at Digit Insurance, enabling instant single-policy generation and fleet batch processing.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Dynatrace', 'TypeScript'],
    highlights: [
      'Processed massive commercial policy volumes across multiple vehicle classes with live validation.',
      'Engineered dynamic reactive form workflows to reduce customer drop-off and accelerate issuance.',
      'Instrumented end-to-end distributed performance monitoring and error tracing via Dynatrace APM.'
    ]
  },
  {
    id: 'bond-chatbot',
    title: 'BOND Automated Slide-Stainer Diagnostic Assistant',
    period: '2021 – 2022',
    category: 'Enterprise',
    description: 'Healthcare diagnostic assistant and instrument automation prototype built for pathology lab technicians operating Beckman Coulter BOND medical instruments.',
    technologies: ['C# .NET', 'PostgreSQL', 'JavaScript', 'IIS Express', 'HTML5/CSS3'],
    highlights: [
      'Developed diagnostic assistant prototype in C# .NET to accelerate reagent troubleshooting.',
      'Identified and resolved critical UI anomalies across customer-deployed pathology instruments.',
      'Collaborated with clinical diagnostics specialists to uphold strict healthcare regulatory standards.'
    ]
  },
  {
    id: 'srcnn-image-enhancement',
    title: 'SR-CNN Deep Learning Degraded Image Enhancement',
    period: '2019 – 2020',
    category: 'AI & ML',
    featured: true,
    description: 'Super-Resolution Convolutional Neural Network (SR-CNN) framework reconstructing high-resolution details from degraded images, published in the IJSART journal.',
    technologies: ['Python', 'SR-CNN Neural Networks', 'Java', 'Bootstrap', 'Apache Tomcat'],
    highlights: [
      'Trained deep learning layers to learn end-to-end mapping between low and high-resolution patches.',
      'Engineered interactive web demo and published peer-reviewed research manuscript in IJSART.',
      'Achieved superior Peak Signal-to-Noise Ratio (PSNR) compared to standard bicubic interpolation.'
    ],
    link: 'https://drive.google.com/drive/folders/15BBEEHoledtIFGJokdku0TwhJoZNG-4k?usp=sharing',
    linkText: 'View Published Paper'
  },
  {
    id: 'improved-aes',
    title: 'Multi-Threaded Improved AES Encryption Engine',
    period: '2019',
    category: 'Systems',
    description: 'High-speed cryptographic data encryption utility engineered at Xon Labs capitalizing on multi-core CPU architecture to safeguard sensitive enterprise records.',
    technologies: ['Java', 'Java Swing', 'Multi-Threading', 'AWS EC2', 'Tomcat'],
    highlights: [
      'Parallelized cryptographic algorithms using multi-threading to cut bulk file encryption times.',
      'Engineered desktop GUI interfaces and deployed endpoints on scalable AWS EC2 cloud instances.',
      'Demonstrated optimized CPU utilization and significantly reduced encryption latency over standard AES.'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'tech-titan',
    title: 'Tech Titan Award',
    type: 'Award',
    issuer: 'Digit Insurance',
    badge: '🏆 Company Honor',
    subtitle: 'Core Policy Architecture & High-Throughput Platform Stability',
    description: 'Awarded in recognition of consistent demonstration of technical excellence, architecture innovation, and high impact on core policy issuance and platform stability.'
  },
  {
    id: 'beckman-hackathon',
    title: 'BOND Innovation Hackathon Award',
    type: 'Award',
    issuer: 'Beckman Coulter Diagnostics',
    badge: '💡 Hackathon Innovation',
    subtitle: 'Automated Pathology Instrument Telemetry & Chatbot Prototyping',
    description: 'Spearheaded the design and implementation of an intelligent diagnostic chatbot UI for laboratory technicians operating BOND pathology instruments.'
  },
  {
    id: 'research-paper',
    title: 'Published Research: Image Super-Resolution',
    type: 'Publication',
    issuer: 'IJSART International Journal',
    badge: '📄 Peer-Reviewed Paper',
    subtitle: 'Deep Learning SR-CNN Neural Networks for Degraded Image Restoration',
    link: 'https://drive.google.com/drive/folders/15BBEEHoledtIFGJokdku0TwhJoZNG-4k?usp=sharing',
    linkText: 'View Published Paper',
    description: 'Manuscript authored based on final year engineering research on deep learning super-resolution neural networks for image restoration.'
  },
  {
    id: 'udemy-certs',
    title: 'Udemy Certified Software Development',
    type: 'Certification',
    issuer: 'Udemy Online Academy',
    badge: '📜 Professional Credentials',
    subtitle: 'Enterprise C# .NET, Modern HTML5 & CSS3, and JavaScript Architecture',
    link: 'https://drive.google.com/drive/folders/11EKXXL8kWiB5wSJGJWl5JzYwvRZGdvSt?usp=sharing',
    linkText: 'View Certificates Drive',
    description: 'Completed certifications in C# Beginner, C# Intermediate, Modern HTML & CSS, and JavaScript Fundamentals.'
  },
  {
    id: 'carnatic-junior',
    title: 'Carnatic Music Junior Board Certification',
    type: 'Award',
    issuer: 'Karnataka State Education Board (KSEEB)',
    badge: '🎵 Classical Arts',
    subtitle: 'State Board Classical Vocal Examination in Rhythm, Melody & Discipline',
    description: 'Successfully completed the prestigious Carnatic Classical Music Junior examination, demonstrating discipline, rhythm, and artistic precision.'
  },
  {
    id: 'cultural-fest-lead',
    title: 'Executive Committee & Media Honors',
    type: 'Award',
    issuer: 'Aakriti Cultural Fest',
    badge: '🎬 Leadership & Media',
    subtitle: 'Executive Leadership, Digital Video Production & Event Organization',
    description: 'Served on the executive core committee and earned certificates of excellence in digital video editing and production for college cultural fest.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Manipal Institute of Technology (MIT)',
    degree: 'Master of Technology (M.Tech)',
    field: 'Software Engineering',
    period: 'September 2020 – August 2022',
    grade: 'CGPA: 8.48 / 10',
    details: 'Specialized in Advanced Software Architecture, Distributed Systems, Cloud Computing, and Machine Learning. Published deep learning research during candidature.',
    logoUrl: 'https://th.bing.com/th/id/OIP.OnlHajDtDS4L7LiN3ycOhgAAAA?pid=ImgDet&rs=1'
  },
  {
    institution: 'East West Institute of Technology (EWIT)',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Science & Engineering',
    period: 'August 2016 – August 2020',
    grade: 'CGPA: 7.22 / 10',
    details: 'Core foundations in Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Software Design. Active member of Core Committee for cultural fest "Aakriti-2k19".',
    logoUrl: 'https://th.bing.com/th/id/R.566f0fafdfc7ae3de7104059c00ca95e?rik=t7LMIbW0MuvUtA&riu=http%3a%2f%2fewsa.edu.in%2fimg%2fdummies%2fworks%2fbig.png&ehk=8XlbJ%2bUp0PHHm29Uvw9YeOVTLnihqPFBrzF0J2irkR8%3d&risl=&pid=ImgRaw&r=0'
  }
];
