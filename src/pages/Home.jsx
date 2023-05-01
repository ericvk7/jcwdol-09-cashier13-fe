import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const userGlobal = useSelector((state) => state.user.user);

  return (
    <div className="mt-30">
      <p>Welcome {userGlobal.name}</p>
    </div>
  );
}

export default Home;
