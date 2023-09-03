import Image from "next/image";

const fetchUser = async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await response.json();
  return data.data;
}

const User = async ({ params }) => {
  const userId = params.id;
  const user = await fetchUser(userId);

  return (
    <section className="bg-slate-400 p-10 rounded-md">
      <Image src={user.avatar} alt={`${user.first_name}-image`} width={1000} height={1000} className="m-auto py-4 w-full" />
      <h3 className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
      <p>email: {user.email}</p>
    </section>
  )
}

export default User;