import {
  Box,
  Chip,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

type ResumeEntry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  skills?: string[];
};

const experience: ResumeEntry[] = [
  {
    title: 'Software Engineer',
    org: 'Apple, Inc., AI/ML',
    period: '2021 – Present',
    bullets: [
      'Siri with Apple Intelligence',
      'Siri on VisionOS',
    ],
    skills: [
      // AI
      'LLMs', 'RAG', 'LLM evaluation', 'Vector databases', 'LangChain', 'LangFlow', 'LangGraph', 'PyTorch', 'Computer Vision', 'NLP', 'AR/MR',
      // Platforms
      'Kubernetes', 'AWS', 'Docker', 'Terraform', 'Kafka', 'Redis', 'Postgres', 'Apache Cassandra',
      // Languages
      'Python', 'Java', 'Golang', 'C++', 'Swift', 'React',
    ],
  },
  {
    title: 'Principal Software Engineer',
    org: 'Splunk, Inc.',
    period: '2019 to 2021',
    bullets: [
      'Splunk Cloud',
      'Platform and Productivity Systems',
    ],
    skills: [
      // Platforms
      'Kubernetes', 'AWS', 'Terraform', 'MongoDB', 'Gitlab',
      // Languages
      'Golang', 'Python', 'C++',
      // Other
      'REST APIs',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'Apple, Inc., IS&S',
    period: '2018 to 2021',
    bullets: [
      'Apple Cloud Infrastructure (formerly Platform Infrastructure Engineering)',
    ],
    skills: [
      // Platforms
      'Kubernetes', 'Docker', 'CI/CD', 'Apache Cassandra', 'Postgres', 'Redis',
      // Languages
      'Python', 'Go', 'Java', 'Swift', 'React',
      // Other
      'Spring MVC', 'JavaEE',
    ],
  },
  {
    title: 'Staff Software Engineer',
    org: 'Intuit, Inc.',
    period: '2015 to 2018',
    bullets: [
      'QuickBooks Online Payroll',
      'QuickBooks Mobile',
      'QuickBooks Self-Employed',
    ],
    skills: [
      // Platforms
      'Oracle', 'Postgres', 'iOS', 'Android', 'Apache HBase',
      // Languages
      'Java', 'React', 'Node.js',
      // Other
      'Spring MVC', 'GraphQL', 'REST APIs',
    ],
  },
  {
    title: 'Engineering Manager',
    org: 'Zillow, Inc.',
    period: '2014 to 2015',
    bullets: [
      'Growth Engineering for https://www.hotpads.com',
    ],
    skills: [
      // Platforms
      'Oracle', 'Postgres', 'AWS',
      // Languages
      'Java', 'React', 'Node.js',
      // Other
      'GraphQL', 'REST APIs',
    ],
  },
];

const education: ResumeEntry[] = [
  {
    title: 'M.S. Engineering',
    org: 'Stanford University',
    period: '',
    bullets: [],
  },
  {
    title: 'B.S. Engineering',
    org: 'University of California at Berkeley',
    period: '',
    bullets: ['Operations Research', 'Financial Engineering'],
  },
  {
    title: 'B.A. Computer Science',
    org: 'University of California at Berkeley',
    period: '',
    bullets: ['Computer Graphics'],
  },
];

const additionalInterests: ResumeEntry[] = [
  {
    title: "Investment portfolio management across public equities and commercial real estate",
    org: "",
    period: "",
    bullets: [
        "California-licensed Real Estate Broker",
        "NMLS-licensed Mortgage Loan Originator",
        "Pursuing Series 65 licensure"
    ]
  },
  {
    title: "Languages Spoken",
    org: "",
    period: "",
    bullets: [
      "Japanese (JLPT N1 certified, native proficiency)",
      "Mandarin Chinese (native proficiency)",
    ]
  }
]

const skills = [
  // AI Tech
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'PyTorch',
  'Computer Vision', 'NLP', 'AR/MR',
  // Platforms
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'PostgreSQL', 'Postgres', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase',
  // Languages
  'Python', 'Swift', 'Go', 'Golang', 'Java', 'TypeScript', 'Node.js', 'C++', 'React',
  // Other
  'REST APIs', 'GraphQL', 'Spring MVC',
];

// ── Skill colour coding ──────────────────────────────────────────────────────
const LANGUAGES = new Set([
  'Python', 'Swift', 'Golang', 'Java', 'TypeScript', 'Node.js', 'C++', 'React',
]);
const PLATFORMS = new Set([
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'Postgres', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase', 'ffmpeg'
]);
const AI_TECH = new Set([
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'PyTorch',
  'Computer Vision', 'NLP', 'AR/MR',
]);

type SkillCategory = 'language' | 'platform' | 'ai' | 'other';

function getSkillCategory(skill: string): SkillCategory {
  if (LANGUAGES.has(skill)) return 'language';
  if (PLATFORMS.has(skill)) return 'platform';
  if (AI_TECH.has(skill))   return 'ai';
  return 'other';
}

const CATEGORY_COLOR: Record<SkillCategory, string> = {
  language: '#1565c0',  // blue
  platform: '#2e7d32',  // green
  ai:       '#212121',  // black
  other:    '#c62828',  // red
};

function SkillChip({ skill }: { skill: string }) {
  const bg = CATEGORY_COLOR[getSkillCategory(skill)];
  return (
    <Chip
      label={skill}
      size="small"
      sx={{ bgcolor: bg, color: '#fff', fontWeight: 500 }}
    />
  );
}

function Section({ title, entries }: { title: string; entries: ResumeEntry[] }) {
  return (
    <Box>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
        {title}
      </Typography>
      <Stack spacing={2}>
        {entries.map((entry) => (
          <Paper key={entry.title + entry.org} variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
            {/* Header row: title + period */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 0.5 }}>
              <Typography fontWeight={600}>{entry.title}</Typography>
              <Typography variant="body2" color="text.secondary">{entry.period}</Typography>
            </Box>
            <Typography variant="body2" color="primary" fontWeight={500} sx={{ mb: 1.5 }}>
              {entry.org}
            </Typography>

            {/* Body: bullets left, skill chips right */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {/* Left — bullets */}
              {entry.bullets.length > 0 && (
                <Stack spacing={0.5} sx={{ flex: '1 1 55%', minWidth: 180 }}>
                  {entry.bullets.map((b) => (
                    <Typography key={b} variant="body2" color="text.secondary">
                      • {b}
                    </Typography>
                  ))}
                </Stack>
              )}

              {/* Right — skill chips */}
              {entry.skills && entry.skills.length > 0 && (
                <Box
                  sx={{
                    flex: '1 1 35%',
                    minWidth: 140,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    gap: 0.75,
                  }}
                >
                  {entry.skills.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </Box>
              )}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default function ResumePage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          Resume
        </Typography>
        <Link href="mailto:dennis.lin.recruiting.2017@gmail.com">Email for Full Resume</Link>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Stack spacing={4}>
        <Section title="Experience" entries={experience} />
        <Section title="Education" entries={education} />
        <Section title="Additional Interests" entries={additionalInterests} />
        {/* Skills */}
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Stack spacing={1.5}>
            {(['ai', 'platform', 'language', 'other'] as SkillCategory[]).map((category) => {
              const group = skills.filter((s) => getSkillCategory(s) === category);
              if (group.length === 0) return null;
              const label: Record<SkillCategory, string> = {
                ai: 'AI',
                platform: 'Platforms',
                language: 'Languages',
                other: 'Other',
              };
              return (
                <Box key={category} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    sx={{ minWidth: 80, pt: 0.5, color: 'text.secondary', textAlign: 'right' }}
                  >
                    {label[category]}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {group.map((skill) => (
                      <SkillChip key={skill} skill={skill} />
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
