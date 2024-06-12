import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "@/apollo-client/query/user.ts";
import { UserType } from "@/types/user.ts";
import AboutUser from "@/components/common/about-user.tsx";

export default function UserPage() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ONE_USER, {
    variables: { id },
  });
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    if (!loading) {
      console.log(data.getUser);
      setUser(data.getUser);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : user === null ? (
        "Nothing found"
      ) : (
        <AboutUser user={user} />
      )}
    </>
  );
}
