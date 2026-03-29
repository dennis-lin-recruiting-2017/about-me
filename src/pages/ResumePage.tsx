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
      'AI-driven workflows integrating state-of-the-art models and advanced search capabilities',
      'Developed automated LLM-as-a-critic systems to improve evaluation and decision-making',
      'Helped bring Siri to life through ML, computer vision, AR/MR, and NLP on Apple Vision Pro and beyond',
    ],
    skills: [
        'Python', 'PyTorch', 'LLM evaluation', 'Vector databases', 'LLMs', 'RAG', 'LangChain', 'LangFlow', 'LangGraph',
        'Java', 'Golang', 'C++', 'Kafka', 'Redis', 'Postgres', 'Kubnernetes', 'Docker', 'Terraform', 'AWS', 'React',
        'Computer Vision', 'NLP', 'AR/MR', 'Swift'],
  },
  {
    title: 'Principal Software Engineer',
    org: 'Splunk, Inc.',
    period: '2019 to 2021',
    bullets: [
      'Splunk Cloud',
      'Platform and Productivity Systems',
    ],
    skills: ['Python', 'Kubernetes', 'AWS', 'Terraform', 'REST APIs'],
  },
  {
    title: 'Software Engineer',
    org: 'Apple, Inc., IS&S',
    period: '2018 to 2021',
    bullets: [
      'Apple Cloud Infrastructure (formerly Platform Infrastructure Engineering)',
    ],
    skills: ['Python', 'Go', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Staff Software Engineer',
    org: 'Intuit, Inc., ',
    period: '2015 to 2018',
    bullets: [
      'QuickBooks Online Payroll',
      'QuickBooks Mobile',
      'QuickBooks Self-Employed',
    ],
    skills: ['Java', 'React', 'Node.js', 'iOS', 'Android', 'REST APIs'],
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

const skills = [
  'TypeScript', 'React', 'Node.js', 'Python',
  'PostgreSQL', 'Docker', 'Git', 'REST APIs', 'FastAPI', 'Material UI',
];

// ── Skill colour coding ──────────────────────────────────────────────────────
const LANGUAGES  = new Set(['Python', 'Swift', 'Go', 'Java', 'TypeScript', 'Node.js', 'Golang', 'C++', 'React',
                            'Typescript']);
const PLATFORMS  = new Set(['Kubernetes', 'AWS', 'Docker', 'iOS', 'Android',
                            'Terraform', 'CI/CD', 'PostgreSQL', 'Git']);
const AI_TECH    = new Set(['LLMs', 'Computer Vision', 'NLP', 'AR/MR', 'RAG', 'LLM evaluation', 'Vector databases',
                            'LangChain', 'LangGraph', 'LangFlow']);

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
        <Link href="mailto:dennis.lin.recruiting.2017@gmail.com">Email for Resume</Link>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Stack spacing={4}>
        <Section title="Experience" entries={experience} />
        <Section title="Education" entries={education} />

        {/* Skills */}
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <SkillChip key={skill} skill={skill} />
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
