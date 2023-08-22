import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <button 
        onClick={event => {
          console.log(event);
          alert('button is clicked!')
        }}>button</button>

      <Profile 
        image='https://images.unsplash.com/photo-1692401891528-44cf0c97154e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=714&q=80'
        name='Kyungho Lee'
        title='FrontEnd Developer'
      />
      <Profile 
        image='https://plus.unsplash.com/premium_photo-1670513725795-d931a20d220f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        name='Haena Hwang'
        title='BackEnd Developer'
      />
      <Profile 
        image='https://images.unsplash.com/photo-1692381219607-2706b93b00d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        name='Roha Lee'
        title='UX Designer'
        isNew={true}
      />
      <Avatar
        image='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=756&q=80'
        isNew={true}
      />
    </>
  );
}

export default AppProfile;
