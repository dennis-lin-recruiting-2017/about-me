import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const techStack = ['Python', 'FastAPI', 'React', 'SQLite', 'OpenAI API'];

const features = [
  'AI-powered text summarization',
  'Document upload and parsing (PDF, DOCX)',
  'Searchable knowledge base',
  'REST API with OpenAPI docs',
  'Lightweight single-file database',
];

export default function Project2Page() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Webapp To Create Computer-Vision Test Cases from Video
      </Typography>
      <Typography color="text.secondary" variant="subtitle1" sx={{ mb: 3 }} />

      <Divider sx={{ mb: 4 }} />

      <Stack spacing={3}>
        {/* Overview */}
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Overview
          </Typography>
          <Typography color="text.secondary" lineHeight={1.8}>
              This is a tool to create an end-to-end UI test case from an uploaded video.  The tool will examine the
              video, identify UI elements and then allow the user to create verification steps for specified frames or
              time ranges.
          </Typography>
        </Paper>

        {/* Demo Video */}
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
              Demo Video
          </Typography>
          <Box
              sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  borderRadius: 1,
                  overflow: 'hidden',
              }}
          >
          <Box
              component="iframe"
              src="https://www.youtube.com/embed/UsMLAnpqFP8"
              title="Project 2 Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                  }}
              />
          </Box>
        </Paper>

        {/* Tech Stack */}
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <BuildIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Tech Stack
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {techStack.map((tech) => (
              <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
            ))}
          </Box>
        </Paper>

        {/* Features */}
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Key Features
          </Typography>
          <Stack spacing={1}>
            {features.map((feature) => (
              <Box key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleOutlineIcon fontSize="small" color="success" />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
