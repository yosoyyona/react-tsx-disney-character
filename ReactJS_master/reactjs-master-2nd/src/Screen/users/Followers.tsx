import { useOutletContext } from "react-router-dom";

interface IFollowerContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowerContext>();

  return <h1>Here are {nameOfMyUser}'s followers</h1>;
}

export default Followers;