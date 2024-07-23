import { memo, useCallback, useMemo, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt("whose name do you want to change?")! as string;
    const current = prompt("what is the new name?")! as string;
    dispatch({ type: "updated", prev, current });
  }, []) 

  const handleAdd = useCallback(() => {
    const name = prompt("what is the mentor's name?")! as string;
    const title = prompt("what is the mentor's title?")! as string;
    dispatch({ type: "added", name, title });
  }, []) 

  const handleRemove = useCallback(() => {
    const name = prompt("what mentor you want to remove?")! as string;
    dispatch({ type: "removed", name });
  }, []) 

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
      <Button onClick={handleUpdate} text="Change Mentor's name" />
      <Button onClick={handleAdd} text="Add Mentor" />
      <Button onClick={handleRemove} text="Remove Mentor" />
    </div>
  );
}

const Button = memo(({ text, onClick }: { text: string; onClick: () => void }) => {
  console.log('button', text, 'rerendering...');
  // computationally heavy operation is rerendered every time the componenent is rerendered.
  // const result = calculateSomething(); 
  
  // to avoid this, we can use useMemo, useCallback
  const result = useMemo(() => calculateSomething(), []);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text} {result}
    </button>
  );
})

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("calculating...");
  }
  return 10;
}

export type Person = {
  name: string;
  title: string;
  mentors: Mentor[];
};

type Mentor = {
  name: string;
  title: string;
};

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
