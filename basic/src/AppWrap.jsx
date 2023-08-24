export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar 
          image='https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
          name='Kyungho'
          size={200}
        />
        <p>Hello! I am Kyungho Lee</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return (
    <header style={{ backgroundColor: 'yellow' }}>{children}</header>
  );
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img 
        src={image} 
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}