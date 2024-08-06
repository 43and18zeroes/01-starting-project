import { useState } from 'react'; 

import { CORE_CONCEPTS } from './data.js'; // named import
import Header from './components/Header/Header.jsx'; // default import
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  console.log(useState('Please click a button'));
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

// export default App;

// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();
import React from 'react';

export default function App() {
    const [ selectedTopic, setSelectedTopic ] = React.useState('$100');
    
    function applyDiscount() {
        setSelectedTopic('$75');
    }
    
    return (
        <div>
            <p data-testid="price">{selectedTopic}</p>
            <button onClick={() => applyDiscount()}>Apply Discount</button>
        </div>
    );
}
