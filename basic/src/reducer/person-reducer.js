export default function personReducer(person, action) {
  switch(action.type) {
    case 'update': {
      const {prev, current} = action;
      return {
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return {...mentor, name: current};
          }
          return mentor;
        })
      };
    }
    case 'add': {
      const {name, title} = action;
      return {
        ...person,
        mentors: [...person.mentors, {name, title, id: person.mentors.length + 1}]
      };
    }
    case 'delete': {
      return {
        ...person,
        mentors: person.mentors.filter(mentor => mentor.name !== action.name)
      };
    }
    default: {
      throw Error(`unknown action type: ${action.type}`);
    }
  }
}