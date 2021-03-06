/*
  | App Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a list of notes.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Module Imports
// import workedWith from '../../data/workedWith';

// Component Imports
import {
  Section,
  SocialLinks,
  Skills,
  // Projects,
  Divider,
  Intro
} from '../../components';
// ...

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class App extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <main>
        <Section layout="centered">
          <Intro />
          <Divider />

          <Skills />
          <Divider />

          <SocialLinks />
        </Section>
      </main>
    );
  }
}

// Exports =========================================================
// -----------------------------------------------------------------
export default App;
