import './App.css';

function AppJSX() {
  const name = 'autumn';
  const list = ['딸기', '바나나', '오렌지'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div style={{ width: '200px', height: '200px' }}></div>
    </>
  );
}

export default AppJSX;
