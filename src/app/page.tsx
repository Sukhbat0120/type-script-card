"use client";
import { useState } from "react";
import { StepCard1 } from "./component/StepCard1";
import { StepCard2 } from "./component/StepCard2";
import { StepCard3 } from "./component/StepCard3";
export type userType = {
  name: string;
  age: number;
  email: string;
}[];
export default function Home() {
  const steps = [StepCard1, StepCard2, StepCard3];
  const [step, setStep] = useState(0);
  const [users, setUsers] = useState();

  const userData: userType = [
    {
      name: "Dorj",
      age: 20,
      email: "dorjoo01@gmail.com",
    },
    {
      name: "Amar",
      age: 28,
      email: "amjoo01@gmail.com",
    },
    {
      name: "Dulam",
      age: 21,
      email: "dulmoo1@gmail.com",
    },
  ];

  return <div className="p-10 gap-2"></div>;
}
