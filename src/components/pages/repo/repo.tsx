import React from "react";
import { useRouter } from "next/router";
import { Repository } from "../pages.styles";

export const RepoComp = () => {
  const router = useRouter();
  const data = router.query;

  return (
    <div>
      <h1>Your saved repos</h1>
      {Object.entries(data)?.map((repo, index) => (
        <Repository key={index}>
          <p>{repo}</p>
        </Repository>
      ))}
    </div>
  );
};
