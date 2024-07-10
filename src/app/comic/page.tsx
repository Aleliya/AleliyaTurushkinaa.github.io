
import ComicServer from '@/components/ComicServer';

const fetchComicData = async () => {
  const email = 'a.turushkina@innopolis.university';
  const params = new URLSearchParams();
  params.append('email', email);

  try {
    const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
    const id = await idResponse.json();

    const comicParams = new URLSearchParams();
    comicParams.append('id', id);

    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${comicParams.toString()}`);
    const comicData = await comicResponse.json();

    return comicData;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const ComicPage = async () => {
  const comicData = await fetchComicData();

  return <ComicServer comicData={comicData} />;
};

export default ComicPage;