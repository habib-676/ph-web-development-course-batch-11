import { use } from "react";

export default function Users({ userPromise }) {
  const users = use(userPromise);

  return (
    <div className="card">
      <h2>Total Users : {users.length}</h2>
      <ul type="square">
        {users.map((user) => (
          <li className="card">Name: {user.name} ,
          Company: {user.company.name},
          City : {user.address.city}</li>
        ))}
      </ul>
    </div>
  );
}
