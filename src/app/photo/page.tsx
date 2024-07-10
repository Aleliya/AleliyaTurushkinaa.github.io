export default function Page() {
  return (
        <div>
          <h1 style={header1}>Photo</h1>
          <h3 style={maintext}>some photos from my life</h3>
            
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