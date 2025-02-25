import {ApplicationRouter} from "@/core/ApplicationRouter.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";


function App() {
  return (
    <div>
      <ApplicationRouter />
      <Toaster />
    </div>
  );
}

export default App;
