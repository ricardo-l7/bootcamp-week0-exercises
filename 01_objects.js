/**
  These exercises aim to get you familiar with object syntax. Hopefully it doesn't trigger
  highschool biology flashbacks.
 */

// You can think of an object like a python dictionary or tree
// They usually have lots of deeply nested data
const TreeOfLife = {
  // Objects can contain basic data types ...
  rank: 'domain',
  archae: 'archaebacteria',
  bacteria: 'eubacteria',
  // ... but they can also contain nested objects, arrays, functions, or anything else
  eukarya: {
    rank: 'kingdom',
    plantae: ['my succulent', 'tomatoes', 'big trees'],
    animalia: {
      rank: 'phylum',
      birds: 'work for the bourgeoisie.',
      humans: ['you', 'me', 'us', 'them', 'everyone!'],
    },
    fungi: {
      guy: "he's fun",
    },
    protista: 'What even is this?',
  },
  // The best domain's key
  bestDomain: 'eukarya',
}

//TODO -- Write a function which returns the domain "archae"
const getArchae = () => {
  return (TreeOfLife.archae);

};

// TODO -- Write a function which returns the array of humans
const getHumans = () => {
  return (TreeOfLife.eukarya.animalia.humans);
};

// TODO -- Write a function which adds a name to the array of humans
const addHuman = (name) => {
  TreeOfLife.eukarya.animalia.humans.push(name);
};

// TODO -- Write a fuction which returns the data representing the "bestDomain"
const getBestDomain = () => {
  let key = TreeOfLife.bestDomain;
  return (TreeOfLife[key]);
};

// TODO -- Write a function which sets the best domain to "eukarya" and then returns the "bestDomain"
const setGetBestDomain = () => {
  TreeOfLife.bestDomain = "eukarya";
  let key = TreeOfLife.bestDomain;
  return (TreeOfLife[key]);
};

/**
  TODO
  Write a function using destructuring and object renaming which returns an array with all the ranks like:
  (Don't hardcode it, pull it from the TreeOfLife)
  [
    'domain',
    'kingdom',
    'phylum',
  ]
 */
const getRanks = () => {
  let {
    rank: rank1,
    archae: archbact,
    bacteria: eubact,
    eukarya: {
      rank: rank2,
      plantae: [item1, item2, item3],
      animalia: {
        rank: rank3,
        birds: text,
        humans: [human1, human2, human3, human4, human5],
      },
      fungi: {
        guy: funText,
      },
      protista: confText,
    },
    bestDomain: bestKey,
  } = TreeOfLife;
  let ranks = [];
  ranks.push(rank1);
  ranks.push(rank2);
  ranks.push(rank3);
  return ranks;
};


// TODO -- Write a function which uses destructuring and the rest operator to return everything BUT the "eukarya"
const noEukaryotes = () => {
  let {rank, ...rest} = TreeOfLife;
  const newObj = {'rank': rank, 'archae': rest.archae, 'bacteria': rest.bacteria, 'bestDomain': rest.bestDomain};
  return (newObj);
};

module.exports = {
  getArchae,
  getHumans,
  addHuman,
  getBestDomain,
  setGetBestDomain,
  getRanks,
  noEukaryotes,
  TreeOfLife,
}
