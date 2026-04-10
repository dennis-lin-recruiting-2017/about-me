import {
  Box,
  Chip,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type ResumeEntry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  skills?: string[];
};

// ── Per-job skill arrays (language-agnostic) ─────────────────────────────────
const expSkills: (string[] | undefined)[] = [
  ['LLMs', 'RAG', 'LLM evaluation', 'Vector databases', 'LangChain', 'LangGraph', 'PyTorch', 'Computer Vision', 'NLP', 'AR/MR', 'Kubernetes', 'AWS', 'Docker', 'Terraform', 'Kafka', 'Redis', 'Postgres', 'Apache Cassandra', 'Python', 'Java', 'Golang', 'C++', 'Swift', 'React'],
  ['Kubernetes', 'AWS', 'Terraform', 'MongoDB', 'Gitlab', 'Golang', 'Python', 'C++', 'REST APIs'],
  ['Kubernetes', 'Docker', 'CI/CD', 'Apache Cassandra', 'Postgres', 'Redis', 'Python', 'Go', 'Java', 'Swift', 'React', 'Spring MVC', 'JavaEE'],
  ['Oracle', 'Postgres', 'iOS', 'Android', 'Apache HBase', 'Java', 'React', 'Node.js', 'Spring MVC', 'GraphQL', 'REST APIs'],
  ['Oracle', 'Postgres', 'AWS', 'Java', 'React', 'Node.js', 'GraphQL', 'REST APIs'],
];

const skills = [
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'PyTorch',
  'Computer Vision', 'NLP', 'AR/MR',
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'PostgreSQL', 'Postgres', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase',
  'Python', 'Swift', 'Go', 'Golang', 'Java', 'TypeScript', 'Node.js', 'C++', 'React',
  'REST APIs', 'GraphQL', 'Spring MVC',
];

// ── Skill colour coding ──────────────────────────────────────────────────────
const LANG_SET = new Set(['Python', 'Swift', 'Golang', 'Go', 'Java', 'TypeScript', 'Node.js', 'C++', 'React']);
const PLATFORM_SET = new Set([
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'Postgres', 'PostgreSQL', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase', 'ffmpeg',
]);
const AI_SET = new Set([
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'PyTorch',
  'Computer Vision', 'NLP', 'AR/MR',
]);

type SkillCategory = 'language' | 'platform' | 'ai' | 'other';

function getSkillCategory(skill: string): SkillCategory {
  if (LANG_SET.has(skill))     return 'language';
  if (PLATFORM_SET.has(skill)) return 'platform';
  if (AI_SET.has(skill))       return 'ai';
  return 'other';
}

const CATEGORY_COLOR: Record<SkillCategory, string> = {
  language: '#1565c0',
  platform: '#2e7d32',
  ai:       '#212121',
  other:    '#c62828',
};

function SkillChip({ skill }: { skill: string }) {
  return (
    <Chip
      label={skill}
      size="small"
      sx={{ bgcolor: CATEGORY_COLOR[getSkillCategory(skill)], color: '#fff', fontWeight: 500 }}
    />
  );
}

function Section({ title, entries }: { title: string; entries: ResumeEntry[] }) {
  return (
    <Box>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>{title}</Typography>
      <Stack spacing={2}>
        {entries.map((entry) => (
          <Paper key={entry.title + entry.org} variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 0.5 }}>
              <Typography fontWeight={600}>{entry.title}</Typography>
              <Typography variant="body2" color="text.secondary">{entry.period}</Typography>
            </Box>
            <Typography variant="body2" color="primary" fontWeight={500} sx={{ mb: 1.5 }}>
              {entry.org}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {entry.bullets.length > 0 && (
                <Stack spacing={0.5} sx={{ flex: '1 1 55%', minWidth: 180 }}>
                  {entry.bullets.map((b) => (
                    <Typography key={b} variant="body2" color="text.secondary">• {b}</Typography>
                  ))}
                </Stack>
              )}
              {entry.skills && entry.skills.length > 0 && (
                <Box sx={{ flex: '1 1 35%', minWidth: 140, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', gap: 0.75 }}>
                  {entry.skills.map((skill) => <SkillChip key={skill} skill={skill} />)}
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
  const { t } = useTranslation();

  const expData   = t('resume.experienceData',        { returnObjects: true }) as ResumeEntry[];
  const eduData   = t('resume.educationData',         { returnObjects: true }) as ResumeEntry[];
  const addlData  = t('resume.additionalInterestsData', { returnObjects: true }) as ResumeEntry[];

  // Merge translated entries with their language-agnostic skill arrays
  const experience = expData.map((e, i) => ({ ...e, skills: expSkills[i] }));

  const categoryLabel: Record<SkillCategory, string> = {
    ai:       t('resume.skillAi'),
    platform: t('resume.skillPlatforms'),
    language: t('resume.skillLanguages'),
    other:    t('resume.skillOther'),
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight={700}>{t('resume.title')}</Typography>
        <Link href="mailto:dennis.lin.recruiting.2017@gmail.com">{t('resume.emailLink')}</Link>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Stack spacing={4}>
        {/* Skills */}
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>{t('resume.skills')}</Typography>
          <Stack spacing={1.5}>
            {(['ai', 'platform', 'language', 'other'] as SkillCategory[]).map((category) => {
              const group = skills.filter((s) => getSkillCategory(s) === category);
              if (group.length === 0) return null;
              return (
                <Box key={category} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    sx={{ minWidth: 90, pt: 0.5, color: 'text.secondary', textAlign: 'right' }}
                  >
                    {categoryLabel[category]}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {group.map((skill) => <SkillChip key={skill} skill={skill} />)}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Section title={t('resume.experience')}          entries={experience} />
        <Section title={t('resume.education')}           entries={eduData} />
        <Section title={t('resume.additionalInterests')} entries={addlData} />
      </Stack>
    </Box>
  );
}
