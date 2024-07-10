import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Page() {
  return (
      <Layout title='About me' description='The page with information about me'>
        <div>
          <h1 style={header1}>Photo</h1>
          <h3 style={maintext}>some photos from my life</h3>
            
          <Image 
          width={218}
          height={284}
          src="/photo_2024-06-08_23-31-39.jpg"
          alt="winter photo"
          style={{ marginLeft: '300px', border: '3px solid rgb(222, 50, 100)'}} />
          <Image 
          width={218} 
          height={284}
          src="/photo_2024-06-08_23-09-33.jpg"
          alt="winter photo" style={{ marginLeft: '518px', border: '3px solid rgb(222, 50, 100)'}} />
          <Image 
          width={218} 
          height={284}
          src="/photo_2024-06-08_23-09-50.jpg" 
          alt="summer photo" 
          style={{ marginLeft: '736px', border: '3px solid rgb(222, 50, 100)'}} />
          <Image 
          width={190} 
          height={284}
          src="/photo_2024-06-08_23-09-55.jpg" 
          alt="summer photo" 
          style={{ marginLeft: '954px', border: '3px solid rgb(222, 50, 100)'}} />
        </div>
      </Layout>
  );
}

const header1:React.CSSProperties = {
  fontFamily: 'DejaVu Sans Mono, monospace',
  fontSize: '50px',
  marginLeft: '650px',
};
const maintext:React.CSSProperties = {
    fontFamily: 'DejaVu Sans Mono, monospace',
    fontSize: '20px',
    marginLeft: '580px',
    color: 'rgb(222, 50, 100)'
};