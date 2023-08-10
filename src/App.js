import { Button, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Typography variant="h2" component={'h6'} sx={{ color: 'lightseagreen' }}>
        Dilanka Liyanagama
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ margin: '30px' }}
        disabled
      >
        Click Me
      </Button>
      <Button variant="text" sx={{ color: 'lightseagreen' }}>
        Click Me
      </Button>
      <Button
        variant="outlined"
        sx={{ color: 'lightseagreen', margin: '30px' }}
        onClick={() => alert('Have a Nice Day!')}
        size="large"
      >
        Click Me For Action
      </Button>
      <Button
        variant="outlined"
        sx={{ margin: '30px' }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        sx={{ margin: '30px' }}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
      <br />
      <br />
      <TextField
        type="text"
        placeholder="name"
        variant="standard"
        sx={{ margin: '30px' }}
      />
      <TextField
        type="text"
        placeholder="name"
        variant="outlined"
        sx={{ margin: '30px' }}
      />
      <TextField
        type="text"
        placeholder="name"
        variant="filled"
        sx={{ margin: '30px' }}
      />
      <Form />
    </div>
  );
}

export default App;
