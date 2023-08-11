import React, { useState } from "react";
import Link from "next/link";
import { Repository, Wrapper, ButtonWrapper, Button } from "./users.styles";

export const Users = ({ userData }: any) => {
  const [repos, setRepos] = useState([]);

  const handleSave = (name: string) => {
    if (repos.includes(name)) return;

    setRepos([...repos, name]);
  };

  const handleRemove = (name: string) => {
    setRepos(repos.filter((repo) => repo !== name));
  };

  console.log(repos)

  return (
    <div>
      <h1>Arrons repos</h1>
      <Wrapper>
        {userData?.map((item, index) => (
          <Repository key={index}>
            <div>
              {repos.includes(item.name) ? (
                <div>Saved</div>
              ) : (
                <div>Not saved</div>
              )}
            </div>
            <p>{item.name}</p>
            <p>{item.url}</p>
            <ButtonWrapper>
              <Button onClick={() => handleSave(item.name)}>Save</Button>
              <Button onClick={() => handleRemove(item.name)}>Remove</Button>
            </ButtonWrapper>
          </Repository>
        ))}
      </Wrapper>
      <Link
        href={{
          pathname: "/repo",
          query: repos, 
        }}
      >
        Repo
      </Link>
    </div>
  );
};
