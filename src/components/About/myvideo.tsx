import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

interface VideoProps {
  videoSrc: string;
  title: string;
  description: string;
}

const MyVideo: React.FC<VideoProps> = ({ videoSrc, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box display="flex" flexDirection="column" height="100%">
        <video
          src={videoSrc}
          controls
          style={{
            width: '100%',
            height : '620px',

            maxHeight: '800px',
            objectFit: 'cover',
            borderRadius: '4px',
            padding: '50px',
          }}
        />
        <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between" p={2}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default MyVideo;
