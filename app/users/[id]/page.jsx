const fetchUser=async(id)=>{
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await response.json();
  return data.data;
}

const User = async ({params}) => {
  const userId = params.id;
  const user = await fetchUser(userId);

  return (
    <div>page with id {user.id}</div>
  )
}

export default User;