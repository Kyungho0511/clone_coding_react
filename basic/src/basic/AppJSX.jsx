import './App.css';

function AppJSX() {
  const name = 'kyungho';
  const list = ['milk', 'chocolate', 'banana', 'yogurt'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {
          list.map(item => {return <li>{item}</li>})
        }
        <img 
          style={{ width: '200px', height: '200px' }}
          src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
          alt="" 
        />
      </ul>
    </>
  );
}

export default AppJSX;
