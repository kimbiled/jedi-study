import { HomePage } from "../features/home/HomePage.jsx";
import { GraphicDesignCoursePage } from "../features/courses/graphic-design/GraphicDesignCoursePage.jsx";
import { UxUiCoursePage } from "../features/courses/ux-ui/UxUiCoursePage.jsx";
import { AiProductCoursePage } from "../features/courses/ai-product/AiProductCoursePage.jsx";

function App() {
  if (window.location.pathname === "/courses/graphic-design") {
    return <GraphicDesignCoursePage />;
  }

  if (window.location.pathname === "/courses/ux-ui") {
    return <UxUiCoursePage />;
  }

  if (window.location.pathname === "/courses/ai-product") {
    return <AiProductCoursePage />;
  }

  return <HomePage />;
}

export default App;
