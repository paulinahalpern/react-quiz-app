import React from "react";
import App from "./App";
import { useParams } from "react-router-dom";

export function QuestionPage() {
  const { title } = useParams();
  return <h1> Category {title}</h1>;
}
