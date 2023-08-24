import { useImmer } from 'use-immer';

export default function AppMentor() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt('Whose name do you want to change?');
    const current = prompt('Enter the name you wish');
    updatePerson(person => {
      const mentor = person.mentors.find(mentor => mentor.name === prev)
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt('what is the name of the mentor?');
    const title = prompt('what is the title of the mentor?');
    updatePerson(person => {
      person.mentors.push({name, title})
    });
  };

const handleDelete = () => {
  const name = prompt('Who do you want to delete?');
  updatePerson(person => {
    const index = person.mentors.findIndex(mentor => mentor.name === name);
    person.mentors.splice(index, 1);
  })
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