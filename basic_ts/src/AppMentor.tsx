import { useState } from "react";

function AppMentor() {
  const [person, setPerson] = useState({
    name: "klee",
    title: "software developer",
    mentor: {
      name: "haena",
      title: "senior software developer",
    },
  });

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt("Enter mentor's name")! as string;
          setPerson({ ...person, mentor: { ...person.mentor, name } });
        }}
      >
        Change Mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt("Enter mentor's title")! as string;
          setPerson({ ...person, mentor: { ...person.mentor, title } });
        }}
      >
        Change Mentor's title
      </button>
    </div>
  );
}

export default AppMentor;
