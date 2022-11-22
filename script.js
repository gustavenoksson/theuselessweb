const getFact = async () => {
  const res = await fetch(
    'https://uselessfacts.jsph.pl/random.json?language=en'
  );
  const fact = await res.json();
};

// fetch('https://uselessfacts.jsph.pl/random.json?language=en')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
