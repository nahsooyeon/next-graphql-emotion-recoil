import Link from "next/link";
import { useRecoilState } from "recoil";
import { nameState } from "../states/index";
import React from "react";

const About = () => {
  const [name, setNameState] = useRecoilState(nameState);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  return (
    <>
      <h1>Profile</h1>
      <p>Hello, {name}</p>

      <input
        type="text"
        name="name"
        id="input_name"
        defaultValue={name}
        onChange={(e) => {
          updateName(e);
        }}
        placeholder="Enter your name"
      />

      <Link href="/">Back to main</Link>
    </>
  );
};

export default About;
