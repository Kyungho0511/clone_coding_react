import { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt("whose name do you want to change?")! as string;
    const current = prompt("what is the new name?")! as string;
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => ({
        name: mentor.name === prev ? current : mentor.name,
        title: mentor.title,
      })),
    }));
  };

  const handleAdd = () => {
    const name = prompt("what is the mentor's name?")! as string;
    const title = prompt("what is the mentor's title?")! as string;
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  const handleRemove = () => {
    const name = prompt("what mentor you want to remove?")! as string;
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  };

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentor is:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
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

const initialPerson = {
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
