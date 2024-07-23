type ProfileProps = {
  name: string;
  age: number;
}

function Profile({name, age}: ProfileProps) {
  return (
    <>
      <h1>{`Profile: ${name}`}</h1>
      <span>{`Age: ${age}`}</span>
      {age > 19 && <span>Adult</span>}
    </>
  );
}

export default Profile;