import { createLazyFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div>
      <App />
    </div>
  ),
});
