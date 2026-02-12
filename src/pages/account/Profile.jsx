import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/user/me")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>Failed to load profile</p>;

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">
        Personal Information
      </h1>

      <div className="grid grid-cols-2 gap-4 max-w-xl">
        <input
          value={user.name || ""}
          disabled
          className="border px-3 py-2 rounded"
        />

        <input
          value={user.email || ""}
          disabled
          className="border px-3 py-2 rounded"
        />

        <input
          value={user.phone || "Not provided"}
          disabled
          className="border px-3 py-2 rounded col-span-2"
        />
      </div>
    </>
  );
}
