import React from 'react';
import Bio from './Bio';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

interface Props {}
export const Scroller: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <Bio />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
export default Scroller;
