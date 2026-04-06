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

const techStack = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'];

const features = [
  'User authentication with JWT',
  'Real-time data updates via WebSockets',
  'Responsive design for mobile and desktop',
  'REST API with full CRUD operations',
  'Automated CI/CD pipeline',
  'Computer vision',
];

export default function Project1Page() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Browser Extension to Visually Record Test Cases
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
              I built a browser extension that records test cases visually. In addition to capturing the UI structure
              through the HTML DOM tree, it enriches each recording with computer vision. The tool captures not just
              the pixel-level appearance of UI elements, but also their spatial relationships to one another. As a
              result, a visual test case recorded on one device, such as a desktop, can be replayed reliably on another,
              such as a mobile device.
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
                      src="https://www.youtube.com/embed/O80CD8Fz40U"
                      title="Browser Extension to Visually Record Test Cases"
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
