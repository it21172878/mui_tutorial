import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import Cards from './components/Cards';
import Accord from './components/Accord';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">DILANKA</Typography>
          <Tabs
            sx={{ marginLeft: 'auto' }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* <Form /> */}
      <div style={{ marginTop: '100px' }}>
        <Cards />
      </div>
      <Accord />
    </div>
  );
}

export default App;
