import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Project3Page() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {t('project3.title')}
      </Typography>
      <Typography color="text.secondary" variant="subtitle1" sx={{ mb: 3 }} />
      <Divider sx={{ mb: 4 }} />

      <Stack spacing={3}>
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>{t('common.overview')}</Typography>
          <Typography color="text.secondary" lineHeight={1.8}>{t('project3.overviewPara1')}</Typography>
          <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>{t('project3.overviewPara2')}</Typography>
        </Paper>
      </Stack>
    </Box>
  );
}
