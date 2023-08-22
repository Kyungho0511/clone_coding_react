import { useState } from "react";

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'KyungHo',
    title: 'Developer',
    mentor: {
      name: 'Haena',
      title: 'Senior Developer'
    }
  });
  return (
    <div className="container"></div>
  );
}