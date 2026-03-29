import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const skills = [
  'TypeScript', 'React', 'Node.js', 'Python',
  'SQL', 'Git', 'REST APIs', 'Material UI',
];

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
        <Grid item xs={12} md={5}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <CodeIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>Skills</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Education */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SchoolIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>Education</Typography>
            </Box>
            <Typography fontWeight={500}>B.S. Computer Science</Typography>
            <Typography color="text.secondary" variant="body2">
              University of California · Graduated 2017
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
