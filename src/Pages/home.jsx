import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

export function Home() {
  return (
    <div className="home-page">
      <div>
        <h1>Welcome to the Frontend Quiz</h1>
        <h2>Pick a subject to get started</h2>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
