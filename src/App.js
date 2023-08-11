import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Form from './components/Form';

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">DILANKA</Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: 'auto' }}
          >
            SignIn
          </Button>
        </Toolbar>
      </AppBar>
      <Form />
    </div>
  );
}

export default App;
