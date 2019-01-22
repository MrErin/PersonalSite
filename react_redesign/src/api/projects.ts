interface Project {
  name: string;
  imgSrc: string;
  deployedLink: string;
  gitHubLink: string;
  description: string;
  status: string | { iteration: number; of: number };
}

export const Projects: Project[] = [
  {
    name: 'TinyNSS',
    imgSrc: '',
    deployedLink: 'http://tinynss.erinmeaker.com',
    gitHubLink: 'https://github.com/MrErin/TinyNSS',
    description:
      'Tiny NSS is an HTML/JavaScript game that simulates the experience of being a student at Nashville Software School. The player must care for their virtual NSS student\'s needs (hunger, social, and fun) as well as keeping the student\'s confidence in the "sweet spot" between timid and delusional so the student is in a good mindset to learn code. The player completes code blocks of increasing complexity ranging from declaring JavaScript variables all the way to creating React.js components.',
    status: 'Version 1 deployed',
  },
  {
    name: 'BookGuise',
    imgSrc: '',
    deployedLink: '',
    gitHubLink: 'https://github.com/MrErin/backEndCapstone',
    description:
      'BookGuise is a data-heavy book suggestion app that accepts the title of the user’s favorite book and returns a list of similar books without revealing the covers, titles, or authors, instead displaying a mysterious description of the similar book. The app is built in Python and merges user-generated data from the Goodreads and LibraryThing book APIs.',
    status: 'Version 1 coded',
  },
  {
    name: 'CodeWars Solutions',
    imgSrc: '',
    deployedLink: 'https://www.codewars.com/users/MrErin',
    gitHubLink: 'https://github.com/MrErin/CodeWars',
    description:
      "CodeWars is a pretty cool site that offers small coding challenges in a ton of different languages. I've enjoyed trying my hand at the challenges and learning new ways to solve problems, primarily in JavaScript at the moment.",
    status: 'Ongoing',
  },
  {
    name: 'Advent of Code - 2018',
    imgSrc: '',
    deployedLink: '',
    gitHubLink: 'https://github.com/MrErin/adventOfCode',
    description:
      "I didn't even come close to finishing this on time this year, but I do intend to keep working on it during 2019. I solved what I could using Python and had a blast with the challenges. Hopefully the site will stay up year-round.",
    status: {
      iteration: 3,
      of: 25,
    },
  },
];
