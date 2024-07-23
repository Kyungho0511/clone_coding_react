import { Person } from "../AppMentorsReducer";

type UpdatedAction = {
  type: 'updated',
  prev: string,
  current: string,
}

type AddedAction = {
  type: 'added',
  name: string,
  title: string,
}

type RemovedAction = {
  type: 'removed',
  name: string,
}

type Action = UpdatedAction | AddedAction | RemovedAction;

export default function personReducer(person: Person, action: Action) {
  switch (action.type) {
    case 'updated': {
      const {prev, current} = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => ({
          name: mentor.name === prev ? current : mentor.name,
          title: mentor.title,
        })),
      }
    }
    case 'added': {
      const {name, title} = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      }
    }
    case 'removed': {
      const {name} = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      }
    }
    default: {
      throw Error(`Unhandled action type: ${action}`);
    }
  }
}