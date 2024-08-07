import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

// function App() {
//   console.log(useState());
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <main>
//         <section id="core-concepts">
//           <h2>Core Concepts</h2>
//           <ul>
//             <CoreConcept {...CORE_CONCEPTS[0]} />
//             <CoreConcept {...CORE_CONCEPTS[1]} />
//             <CoreConcept {...CORE_CONCEPTS[2]} />
//             <CoreConcept {...CORE_CONCEPTS[3]} />
//           </ul>
//         </section>
//         <section id="examples">
//           <h2>Examples</h2>
//           <menu>
//             <TabButton onSelect={() => handleSelect('components')}>
//               Components
//             </TabButton>
//             <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
//             <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
//             <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
//           </menu>
//           {tabContent}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';

// don't change the Component name "App"
export default function App() {
  const [isDeleting, setIsDeleting] = React.useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  return (
    <div>
      {isDeleting ? (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      ) : (
        <button onClick={deleteHandler}>Delete</button>
      )}
    </div>
  );
}
