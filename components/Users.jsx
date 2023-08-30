import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <section>
      <ul>
        {users?.map((user) => (
          <Link href={`users/${user.id}`} key={user.id}>
            <li
              key={user.id}
              className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
            >
              <div>
                <h3>
                  {user.id} {user.first_name} {user.last_name}{" "}
                </h3>
                <p className="text-slate-100">Email: {user.email}</p>
              </div>
              <Image
                src={user.avatar}
                alt={user.first_name}
                width={1000}
                height={1000}
                className="rounded-full w-20"
              />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Users;
