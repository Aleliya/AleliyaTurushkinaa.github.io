import Layout from '@/components/Layout';
import Head from 'next/head';


type ComicData = {
  safe_title?: string;
  day?: number;
  month?: number;
  year?: number;
  img?: string;
  alt?: string;
};

const ComicServer: React.FC<{ comicData: ComicData }> = ({ comicData }) => {
  const { safe_title, day, month, year, img, alt } = comicData;
  const formattedDate = year && month && day ? new Date(year, month - 1, day).toLocaleDateString() : '';

  return (
    <Layout>
      <Head>
        <title>{safe_title ? safe_title : 'Comics'}</title>
        <meta name="description" content={alt ? alt : 'API comics'} />
      </Head>
      <div style={{ padding: '0 450px', fontFamily: 'DejaVu Sans Mono, monospace', fontSize: '20px', paddingTop: '50px' }}>
        <div style={{ fontSize: '40px', paddingLeft: '250px' }} id="safe_title-container">
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

export default ComicServer;