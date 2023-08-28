const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data);
  return data.data;
};

const HomePage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h3>
                Id: {user.id} First Name: {user.first_name} Last Name:{" "}
                {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
