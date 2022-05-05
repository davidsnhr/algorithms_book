const graph = () => {
  const graph = {};
  graph['you'] = ['alice', 'bob', 'claire'];
  graph['bob'] = ['anuj', 'peggy'];
  graph['alice'] = ['peggy'];
  graph['claire'] = ['thom', 'jonny'];
  graph['anuj'] = [];
  graph['peggy'] = [];
  graph['thom'] = [];
  graph['jonny'] = [];

  let searchQueu = graph['you'];
  let searchead = [];
  while (searchQueu) {
    person = searchQueu.shift();
    if (searchead.filter((search) => search !== person)) {
      if (personIsSeller(person)) {
        return console.log(person + ' is a mango seller');
      } else {
        graph[person].map((person) => searchQueu.push(person));
        searchead.push(person);
      }
    }
  }
  return false;
};

const personIsSeller = (name) => {
  return name.slice(-1) == 'm';
};

graph();
