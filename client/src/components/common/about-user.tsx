import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Title from "@/components/ui/title.tsx";
import Button from "@/components/ui/button.tsx";
import { DELETE_USER } from "@/apollo-client/mutation/user.ts";
import useUserStore from "@/store/user.ts";
import type { UserType } from "@/types/user.ts";
import { routes } from "@/config/routes.ts";

export default function AboutUser({ user }: { user: UserType }) {
  const [deleteUser] = useMutation(DELETE_USER);
  const navigate = useNavigate();
  const { users, setUsers } = useUserStore();

  const handleDeleteUser = async () => {
    try {
      const res = await deleteUser({ variables: { id: user.id } });
      toast.success(
        `${res.data.deleteUser.username} was successfully deleted.`,
      );
      const updatedUsers = users.filter((item) => item.id !== user.id);
      setUsers(updatedUsers);
      navigate(routes.home);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section>
      <section className="mb-5">
        <Title as="h2" className="mb-5">
          About user
        </Title>
        <p className="text-xs">ID: {user.id}</p>
        <h3>Name: {user.username}</h3>
        <p>Position: {user.position}</p>
      </section>
      <Button onClick={handleDeleteUser}>Delete user</Button>
    </section>
  );
}
