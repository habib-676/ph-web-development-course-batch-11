export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, phone, address } = friend;
  return (
    <div className="card">
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
      <p>Phone : {phone} </p>
      <p>
        Address : {address.street} , {address.suite}, {address.city}
      </p>
    </div>
  );
}
