import React from 'react';
import { CheckboxWithLabel } from './components';

const App: React.FC = (): JSX.Element => (
  <div>
    Hello

    <CheckboxWithLabel labelOn="ON" labelOff="off" />
  </div>
);

export default App;
