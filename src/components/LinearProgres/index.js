import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import { Container } from './styles';

const MyLinearProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#EFF3F9',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#639BDC',
  },
})(LinearProgress);

function LinearProgressWithLabel(props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      style={{ display: 'flex', flexDirection: 'column', margin: '0 15px' }}
    >
      <Box style={{ width: '100%' }}>
        <Typography variant="body2" color="textSecondary">
          <Container>
            <text>{props.name}</text>

            <span>{`${props.value}%`}</span>
          </Container>
        </Typography>
      </Box>
      <Box width="100%" borderRadius="50%">
        <MyLinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({ value, name }) {
  return <LinearProgressWithLabel name={name} value={value} />;
}
