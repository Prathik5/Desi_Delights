import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import verifiedBadge from "../Assets/Images/verifiedBadge.png";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center justify-center align-middle">
        <h1>
          {" "}
          Hello, {user.name}{" "}
          {user.email_verified ? (
            <img
              className="inline h-5 w-5 m-auto  object-cover"
              src={verifiedBadge}
              alt="Verified"
            />
          ) : (
            <></>
          )}
        </h1>
        <div>
          <img className="rounded-full" src={user.picture} alt={user.name} />
        </div>
        <p>{user.email}</p>
        <div>{user.address}</div>
      </div>
    )
  );
};

export default UserProfile;
