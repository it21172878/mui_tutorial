import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const Accord = () => {
  const courses = ['Mongo DB', 'Express', 'ReactJS', 'NodeJs'];
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={'^'}>
          <Typography variant="h5">What is MERN Stack?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sint in ipsum Lorem magna magna. Ullamco sint pariatur aliquip
            incididunt nulla ea esse incididunt excepteur esse nisi cupidatat
            ea. Cupidatat amet proident aliquip fugiat nisi do pariatur. Sit sit
            id ipsum enim reprehenderit elit ipsum consectetur. Dolor sunt ipsum
            enim ea ea nisi non magna occaecat in irure ad est.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Autocomplete
        sx={{ width: '70%' }}
        options={courses}
        renderInput={(params) => {
          return <TextField {...params} label="Select a course" />;
        }}
      />
    </div>
  );
};

export default Accord;
