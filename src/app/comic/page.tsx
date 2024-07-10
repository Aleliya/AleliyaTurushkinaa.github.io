  const email = 'a.turushkina@innopolis.university';
  const params = new URLSearchParams();
  params.append('email', email);

  try {
    const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
    const id = await idResponse.json();

    const comicParams = new URLSearchParams();
    comicParams.append('id', id);

    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${comicParams.toString()}`);

  } catch (error) {
    console.error(error);
  }
};


};
