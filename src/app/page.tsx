import Layout from '@/components/header';

function Home() {
  return (
    <Layout>
      <div>
        <h1 style={header1}>Aleliya Turushkina</h1>
        <h2 style={{fontFamily: 'DejaVu Sans Mono, monospace', fontSize: '25px', marginLeft: '600px',
           color: 'rgb(222, 50, 100)'}}>My little portfolio</h2>
        <h3 style={maintext}>
              I know programming languages such as:
              <div style={list}>
                  <li>Java</li>
                  <li>Python</li>
              </div>
              At the moment, I am studying Front-end Web Development and, accordingly, programming  languages:
              <div style={list}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
              </div>
              I also work in the Math Helper project, which is a site where a user can upload their solution to a problem and receive feedback
          </h3>
      </div>
    </Layout>
  );
}

const header1:React.CSSProperties = {
  fontFamily: 'DejaVu Sans Mono, monospace',
  fontSize: '50px',
  marginLeft: '500px',
  paddingTop: '30px',
}
const maintext:React.CSSProperties = {
  fontFamily: 'DejaVu Sans Mono, monospace',
  marginLeft: '250px',
  marginRight: '150px',
  border: '2px solid rgb(222, 50, 100)',
  width: '1000px',
  height: '350px',
  paddingLeft: '40px',
  borderRadius: '10px',
  paddingTop: '30px',
};
const list:React.CSSProperties = {
  paddingLeft: '50px',
};

export default Home;