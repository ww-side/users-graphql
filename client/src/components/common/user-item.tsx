import { Link } from "react-router-dom";
import { routes } from "@/config/routes.ts";
import type { UserType } from "@/types/user.ts";

export default function UserItem({ user }: { user: UserType }) {
  return (
    <div className="bg-gray-200 w-[250px] p-3 rounded-md shadow-sm">
      <h3 className="text-sm">#{user.id}</h3>
      <p>User: {user.username}</p>
      <Link
        className="text-xs text-blue-400 underline"
        to={routes.toUser(user.id)}
      >
        More details...
      </Link>
    </div>
  );
}
