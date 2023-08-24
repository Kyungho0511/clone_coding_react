import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt('Whose name do you want to change?');
    const current = prompt('Enter the name you wish');
    dispatch({ type: 'update', prev, current });
  };

  const handleAdd = () => {
    const name = prompt('what is the name of the mentor?');
    const title = prompt('what is the title of the mentor?');
    dispatch({ type: 'add', name, title });
  };

const handleDelete = () => {
  const name = prompt('Who do you want to delete?');
  dispatch({ type: 'delete', name })
}

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name} has mentors:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change mentor's name</button>
      <button onClick={handleAdd}>Add a mentor</button>
      <button onClick={handleDelete}>Delete a mentor</button>
    </div>
  );
}

const initialPerson = {
  name: 'KyungHo',
  title: 'Developer',
  mentors: [
    {
      name: 'Haena',
      title: 'Senior Developer',
      id: 1
    },
    {
      name: 'Roha',
      title: 'Senior Developer',
      id: 2
    }
  ]
};