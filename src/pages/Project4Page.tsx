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

const techStack = ['Golang', 'Postgres', 'React', 'Computer Vision', 'Swift', 'iOS', 'ffmpeg', 'SQLite'];

const features: string[] = [
    'Computer Vision',
    'Video processing',
    'AI/ML feature extraction'
];

export default function Project4Page() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
          Perception-Based Object Detection Data Pipeline
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
              I built a tool that analyzes uploaded video and runs an embedded data pipeline to extract features. In
              this demo, the pipeline identifies the location of a tennis ball in each frame. Users can inspect the
              detection results below the video, and when a ball is found, its position is highlighted with a red circle
              overlaid on the frame.
              <br />
              <br />
              The detection process starts by applying a yellow mask to isolate regions with enough brightness and
              saturation. It then identifies connected blobs and selects the candidate that is most likely to represent
              a tennis ball based on size, compactness, fill ratio, aspect ratio, and circularity. The center of the
              highest-scoring candidate is returned as the detected position. When no candidate appears circular enough,
              the system falls back to the centroid of the largest yellow blob with lower confidence, ensuring it can
              still provide an approximate location.
              <br />
              <br />
              A demo is available for <a href="https://github.com/dennis-lin-recruiting-2017/about-me/blob/main/downloads/project04/Demo_DennisLin_TennisBallLocator_AppleSilicon">Macs running Apple Silicon</a>.
          </Typography>
        </Paper>

        {/* Demo Video — uncomment and set src when ready */}
        {
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Demo Video
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 1, overflow: 'hidden' }}>
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/JTzsljxE-NA"
              title="Project 4 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </Box>
        </Paper>
        }

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
