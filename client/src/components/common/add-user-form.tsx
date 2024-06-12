import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/button.tsx";
import Input from "@/components/ui/input.tsx";
import { CREATE_USER } from "@/apollo-client/mutation/user.ts";
import useUserStore from "@/store/user.ts";

export default function AddUserForm() {
  const { users, setUsers } = useUserStore();
  const { register, handleSubmit, reset } = useForm<{
    username: string;
    position: string;
  }>();
  const [createUser] = useMutation(CREATE_USER);

  const onSubmit = async (data: { username: string; position: string }) => {
    try {
      const res = await createUser({
        variables: {
          input: {
            username: data.username,
            position: data.position,
          },
        },
      });
      console.log(res);
      setUsers([...users, res.data.createUser]);
      reset();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-3">
      <section className="flex gap-3">
        <Input placeholder="Username" register={register("username")} />
        <Input placeholder="Position" register={register("position")} />
        <Button type="submit">Add User</Button>
      </section>
    </form>
  );
}
