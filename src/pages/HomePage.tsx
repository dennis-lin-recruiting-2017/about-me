import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import { useTranslation } from 'react-i18next';

// ── Skill data (language-agnostic) ───────────────────────────────────────────
const skills = [
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'PyTorch',
  'Computer Vision', 'NLP', 'AR/MR',
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'PostgreSQL', 'Postgres', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase',
  'Python', 'Swift', 'Go', 'Golang', 'Java', 'TypeScript', 'Node.js', 'C++', 'React',
  'REST APIs', 'GraphQL', 'Spring MVC', 'ffmpeg',
];

const LANG_SET = new Set([
  'Python', 'Swift', 'Go', 'Golang', 'Java', 'TypeScript', 'Node.js', 'C++', 'React',
]);
const PLATFORM_SET = new Set([
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'PostgreSQL', 'Postgres', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase',
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

// ── Component ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { t } = useTranslation();

  const categoryLabelKey: Record<SkillCategory, string> = {
    ai:       t('home.skillAi'),
    platform: t('home.skillPlatforms'),
    language: t('home.skillLanguages'),
    other:    t('home.skillOther'),
  };

  const aiCapabilities  = t('home.aiCapabilities',    { returnObjects: true }) as string[];
  const infraCapabilities = t('home.infraCapabilities', { returnObjects: true }) as string[];

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
        <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32 }}>D</Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>{t('home.greeting')}</Typography>
          <Typography variant="subtitle1" color="text.secondary">{t('home.subtitle')}</Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3}>

        {/* Summary card */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <WorkIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>{t('home.aboutMe')}</Typography>
            </Box>
            <Typography color="text.secondary" lineHeight={1.8}>{t('home.aboutPara1')}</Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>{t('home.aboutPara2')}</Typography>
          </Paper>
        </Grid>

        {/* Capabilities card */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <BuildIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>{t('home.capabilities')}</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
                  {t('home.aiPlatforms')}
                </Typography>
                <Stack spacing={1}>
                  {aiCapabilities.map((item) => (
                    <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Typography color="primary.main" sx={{ flexShrink: 0, lineHeight: 1.7 }}>▸</Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
                  {t('home.infraAndEval')}
                </Typography>
                <Stack spacing={1}>
                  {infraCapabilities.map((item) => (
                    <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Typography color="primary.main" sx={{ flexShrink: 0, lineHeight: 1.7 }}>▸</Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Skills */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <CodeIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>{t('home.skills')}</Typography>
            </Box>
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
                      {categoryLabelKey[category]}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {group.map((skill) => <SkillChip key={skill} skill={skill} />)}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}
