import Layout from '@/components/header';

export default function Page() {
  return (
      <Layout>
        <div>
          <h1 style={header1}>Photo</h1>
          <h3 style={maintext}>some photos from my life</h3>
            
          <img src="./photo_2024-06-08_23-31-39.jpg" alt="winter photo" style={{ marginLeft: '300px', border: '3px solid rgb(222, 50, 100)', width: '218px', height: '284px' }} />
          <img src="./photo_2024-06-08_23-09-33.jpg" alt="winter photo" style={{ marginLeft: '518px', border: '3px solid rgb(222, 50, 100)', width: '218px', height: '284px' }} />
          <img src="./photo_2024-06-08_23-09-50.jpg" alt="summer photo" style={{ marginLeft: '736px', border: '3px solid rgb(222, 50, 100)', width: '218px', height: '284px' }} />
          <img src="./photo_2024-06-08_23-09-55.jpg" alt="summer photo" style={{ marginLeft: '954px', border: '3px solid rgb(222, 50, 100)', width: '190px', height: '284px' }} />
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