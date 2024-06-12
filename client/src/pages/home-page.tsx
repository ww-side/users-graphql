import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import UserList from "@/components/common/user-list.tsx";
import Title from "@/components/ui/title.tsx";
import AddUserForm from "@/components/common/add-user-form.tsx";
import { GET_USERS } from "@/apollo-client/query/user";
import useUserStore from "@/store/user.ts";

export default function HomePage() {
  const { data, loading, error } = useQuery(GET_USERS);
  const { users, setUsers } = useUserStore();

  useEffect(() => {
    if (!loading) {
      console.log(data);
      setUsers(data.getUsers);
    }
  }, [data]);

  if (error) return <h1>Error</h1>;

  return (
    <>
      <Title as="h2" className="mb-5">
        Users
      </Title>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <UserList users={users} />
          <AddUserForm />
        </>
      )}
    </>
  );
}
