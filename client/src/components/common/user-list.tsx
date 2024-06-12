import UserItem from "@/components/common/user-item.tsx";
import type { UserType } from "@/types/user.ts";

export default function UserList({ users }: { users: UserType[] }) {
  return (
    <section className="flex flex-wrap gap-5">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </section>
  );
}
