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

// ── Skill data ────────────────────────────────────────────────────────────────
const skills = [
  // AI Tech
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'LangFlow', 'PyTorch',
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

// ── Skill colour coding ───────────────────────────────────────────────────────
const LANGUAGES = new Set([
  'Python', 'Swift', 'Go', 'Golang', 'Java', 'TypeScript', 'Node.js', 'C++', 'React',
]);
const PLATFORMS = new Set([
  'Kubernetes', 'AWS', 'Docker', 'iOS', 'Android', 'Terraform', 'CI/CD',
  'PostgreSQL', 'Postgres', 'Git', 'Kafka', 'Redis', 'MongoDB', 'Gitlab',
  'Oracle', 'Apache Cassandra', 'Apache HBase',
]);
const AI_TECH = new Set([
  'LLMs', 'RAG', 'LLM evaluation', 'Vector databases',
  'LangChain', 'LangGraph', 'LangFlow', 'PyTorch',
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

const CATEGORY_LABEL: Record<SkillCategory, string> = {
  ai:       'AI',
  platform: 'Platforms',
  language: 'Languages',
  other:    'Other',
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

// ── Component ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
        <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32 }}>
          D
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Hi, I'm Dennis 👋
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Software Engineer · Builder · Life-long Learner
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3}>
        {/* About */}
        <Grid item xs={12} md={7}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <WorkIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>About Me</Typography>
            </Box>
            <Typography color="text.secondary" lineHeight={1.8}>
              I'm a software engineer who loves building clean, user-friendly
              products. I enjoy working across the full stack — from designing
              APIs to crafting responsive UIs. In my spare time I tinker with
              side projects, contribute to open source, and explore new
              technologies.
            </Typography>
          </Paper>
        </Grid>

        {/* Skills */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <CodeIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>Skills</Typography>
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
                      sx={{ minWidth: 80, pt: 0.5, color: 'text.secondary', textAlign: 'right' }}
                    >
                      {CATEGORY_LABEL[category]}
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
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
