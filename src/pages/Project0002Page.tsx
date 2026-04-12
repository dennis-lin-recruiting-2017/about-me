import { Box, Chip, Divider, Paper, Stack, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';

const techStack = ['Golang', 'Postgres', 'React', 'Computer Vision', 'Swift', 'iOS', 'ffmpeg', 'Redis'];

export default function Project0002Page() {
  const { t } = useTranslation();
  const features = t('project2.features', { returnObjects: true }) as string[];

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {t('project2.title')}
      </Typography>
      <Typography color="text.secondary" variant="subtitle1" sx={{ mb: 3 }} />
      <Divider sx={{ mb: 4 }} />

      <Stack spacing={3}>
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>{t('common.overview')}</Typography>
          <Typography color="text.secondary" lineHeight={1.8}>{t('project2.overview')}</Typography>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>{t('common.demoVideo')}</Typography>
          <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 1, overflow: 'hidden' }}>
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/UsMLAnpqFP8"
              title={t('project2.title')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <BuildIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>{t('common.techStack')}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {techStack.map((tech) => (
              <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
            ))}
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>{t('common.keyFeatures')}</Typography>
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
