import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    courses: '',
  });

  // handleChange Func
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  //   Form handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form
        style={{
          marginTop: '60px',
          backgroundColor: 'lightcyan',
          padding: '20px',
          borderRadius: '5px',
          width: '70%',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="enter name"
          type="text"
          variant="outlined"
          sx={{ margin: '30px' }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="enter email"
          type="email"
          variant="outlined"
          sx={{ margin: '30px', mt: '-25px' }}
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="enter password"
          type="password"
          variant="outlined"
          sx={{ margin: '30px', mt: '-25px' }}
        />
        <br />
        <FormControl sx={{ margin: '30px', mt: '-25px', width: '70%' }}>
          <InputLabel id="menu">Courser</InputLabel>
          <Select
            name="courses"
            label="courses"
            onChange={handleChange}
            value={inputs.courses}
          >
            <MenuItem value={'MongoDB'}>MongoDB</MenuItem>
            <MenuItem value={'Express'}>Express</MenuItem>
            <MenuItem value={'ReactJs'}>ReactJs</MenuItem>
            <MenuItem value={'NodeJs'}>NodeJs</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button
          color="success"
          variant="contained"
          type="submit"
          sx={{ margin: '30px', mt: '-10px' }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
