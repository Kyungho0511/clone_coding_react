import { useImmer } from "use-immer";

export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt("whose name do you want to change?")! as string;
    const current = prompt("what is the new name?")! as string;
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev)! as Mentor;
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt("what is the mentor's name?")! as string;
    const title = prompt("what is the mentor's title?")! as string;
    updatePerson((person) => {person.mentors.push({name, title})});
  };

  const handleRemove = () => {
    const name = prompt("what mentor you want to remove?")! as string;
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
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
