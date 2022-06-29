import './App.css';
import RoutesPOC from './Routes';
import { Header } from './componentes/layout';
import { SWRConfig } from 'swr';

function App() {
  console.log('App')
  return (
    <>
    <SWRConfig>
      <Header/>
      <div className='Content'>
      <RoutesPOC />
      </div>
    </SWRConfig>
    </>
  );
}

export default App;
