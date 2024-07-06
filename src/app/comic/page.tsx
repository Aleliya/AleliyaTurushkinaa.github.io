"use client";
import Layout from '@/components/header';
import { useEffect, useState } from 'react';

type ComicData = {
  safe_title?: string;
  day?: number;
  month?: number;
  year?: number;
  img?: string;
  alt?: string;
};

const Comic: React.FC = () => {
  const [comicData, setComicData] = useState<ComicData>({});

  useEffect(() => {
    const fetchComic = async () => {
      const email = 'a.turushkina@innopolis.university';
      const params = new URLSearchParams();
      params.append('email', email);

      try {
        const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
        const id = await idResponse.json();

        const comicParams = new URLSearchParams();
        comicParams.append('id', id);

        const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${comicParams.toString()}`);
        const comicData: ComicData = await comicResponse.json();

        setComicData(comicData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComic();
  }, []);

  const { safe_title, day, month, year, img, alt } = comicData;
  const formattedDate = year && month && day ? new Date(year, month - 1, day).toLocaleDateString() : '';

  return (
    <Layout>
    <div style={{ padding: '0 450px', fontFamily: 'DejaVu Sans Mono, monospace', fontSize: '20px', paddingTop: '50px' }}>
      <div style={{fontSize: '40px', paddingLeft: '250px'}} id="safe_title-container">
        {safe_title && <h1>{safe_title}</h1>}
      </div>
      <div id="date-container">
        {formattedDate && <h2>{formattedDate}</h2>}
      </div>
      <div id="image-container">
        {img && <img src={img} alt={alt} />}
      </div>
      <div id="alt-container">
        {alt && <p>{alt}</p>}
      </div>
    </div>
    </Layout>
  );
};

export default Comic;
