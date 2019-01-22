interface Failure {
  problem: string;
  soI: string;
  andLearned: string;
}

export const Failures: Failure[] = [
  {
    problem: "I couldn't get the data",
    soI:
      'tried three different languages before ultimately pivoting on my goal.',
    andLearned: 'how to import XML and JSON into SQL database using Python',
  },
  {
    problem: 'I was in the middle of a CSS nightmare',
    soI: 'researched whether CSS had variables',
    andLearned: 'how to use Sass to make styling websites so much easier',
  },
  {
    problem: 'The data was sloppy, poorly mapped, and incomplete',
    soI: 'studied data validation and cleaning techniques',
    andLearned:
      'how to clean data, but also how to think around corners and edge cases to many types of problem',
  },
];
