import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Remove FullCalendar CSS imports that are causing issues

createRoot(document.getElementById("root")!).render(<App />);
