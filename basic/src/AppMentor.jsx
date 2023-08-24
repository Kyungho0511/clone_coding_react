import { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'KyungHo',
    title: 'Developer',
    mentor: {
      name: 'Haena',
      title: 'Senior Developer'
    }
  });
  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name} has a mentor {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={() => {
        const name = prompt(`what's your mentor's name?`);
        setPerson(person => ({...person, mentor: {...person.mentor, name: name}}));
      }}>Change mentor's name</button>
      <button onClick={() => {
        const title = prompt(`what's your mentor's title?`);
        setPerson(person => ({...person, mentor: {...person.mentor, title: title}}))
      }}>Change mentor's title</button>
    </div>
  );
}