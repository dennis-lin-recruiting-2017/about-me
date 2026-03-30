import {
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const techStack: string[] = [];

const features: string[] = [];

export default function Project4Page() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Data Pipeline for Feature Extraction
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
              Downloadable all-in-one executable to demo a data exaction pipeline.
              <br />
              <br />
              Coming soon.
          </Typography>
        </Paper>

        {/* Demo Video — uncomment and set src when ready */}
        {/*
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Demo Video
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 1, overflow: 'hidden' }}>
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Project 4 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </Box>
        </Paper>
        */}

        {/* Tech Stack */}
        {techStack.length > 0 && (
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
        )}

        {/* Features */}
        {features.length > 0 && (
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
        )}
      </Stack>
    </Box>
  );
}
