import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/home.jsx";
import { SinglePageQuestion } from "./Question.jsx";
import { QuestionPage } from "./QuestionsPage.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:title" element={<SinglePageQuestion />} />
      </Routes>
    </>
  );
}
