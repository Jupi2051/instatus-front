import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";

function App() {
  return <div className="flex flex-col font-sans leading-tight bg-gray-50 dark:bg-gray-980">
    <h1>asfasf</h1>
    <Header />
    <Outlet />
  </div>;
}

export default App;
