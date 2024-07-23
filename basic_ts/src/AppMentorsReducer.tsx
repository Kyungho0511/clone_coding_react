import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt("whose name do you want to change?")! as string;
    const current = prompt("what is the new name?")! as string;
    dispatch({type: 'updated', prev, current});
  };

  const handleAdd = () => {
    const name = prompt("what is the mentor's name?")! as string;
    const title = prompt("what is the mentor's title?")! as string;
    dispatch({type: 'added', name, title});
  };

  const handleRemove = () => {
    const name = prompt("what mentor you want to remove?")! as string;
    dispatch({type: 'removed', name});
  };

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentor is:</p>
      <ul>
        {person.mentors.map((mentor: Mentor, index: number) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change Mentor's name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleRemove}>Remove Mentor</button>
    </div>
  );
}

export type Person = {
  name: string;
  title: string;
  mentors: Mentor[];
}

type Mentor = {
  name: string;
  title: string;
}

const initialPerson: Person = {
  name: "klee",
  title: "software developer",
  mentors: [
    {
      name: "haena",
      title: "senior software developer",
    },
    {
      name: "roha",
      title: "junior software developer",
    },
  ],
};
