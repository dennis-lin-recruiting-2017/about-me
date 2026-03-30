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
  language: '#1565c0',
  platform: '#2e7d32',
  ai:       '#212121',
  other:    '#c62828',
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

const AI_CAPABILITIES = [
  'LLM systems & agentic workflows \u2014 reasoning pipelines, tool use, and multi-step decision systems',
  'Retrieval & semantic search \u2014 vector databases, embedding systems, and context-aware generation',
  'Multimodal AI \u2014 combining text, speech, and vision for real-world applications',
  'On-device inference \u2014 optimizing models for low-latency, privacy-preserving environments',
];

const INFRA_CAPABILITIES = [
  'Go-based microservices and distributed systems',
  'Python orchestration layers for ML workflows',
  'React-based interfaces for developer and user interaction',
  'LLM-driven evaluation frameworks \u2014 AI-driven test generation, semantic diffing, and persona-based simulation',
];

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
            Principal AI Engineer · LLM Systems · RAG & Agentic Workflows · Multimodal AI (Vision, Speech, Text) · Production ML Infrastructure
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3}>

        {/* Summary card */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <WorkIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>About Me</Typography>
            </Box>
            <Typography color="text.secondary" lineHeight={1.8}>
              I'm an AI Engineer focused on building production-grade systems around large language
              models (LLMs), retrieval-augmented generation (RAG), and multimodal AI. My work centers
              on turning cutting-edge models into reliable, scalable products &mdash; from designing
              evaluation frameworks and agentic workflows to building end-to-end systems that integrate
              search, reasoning, and real-time inference.
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>
              I'm particularly interested in bridging research and engineering: making AI systems more
              efficient, observable, and deployable across environments, from cloud platforms to edge
              and on-device systems.
            </Typography>
          </Paper>
        </Grid>

        {/* Capabilities card */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <BuildIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>Capabilities</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
                  AI Platforms
                </Typography>
                <Stack spacing={1}>
                  {AI_CAPABILITIES.map((item) => (
                    <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Typography color="primary.main" sx={{ flexShrink: 0, lineHeight: 1.7 }}>▸</Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
                  Infrastructure & Evaluation
                </Typography>
                <Stack spacing={1}>
                  {INFRA_CAPABILITIES.map((item) => (
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
