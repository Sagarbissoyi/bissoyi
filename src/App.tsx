
import '@mantine/core/styles.css';
import './App.css';
import Homepage from './components/Homepage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
    <Homepage/>
    </MantineProvider>
  );
}

export default App;
