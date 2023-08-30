import Users from "@/components/Users";

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
      <Users users={users}/>
    </div>
  );
};

export default HomePage;
