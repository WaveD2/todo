import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./Page/HomePage"));
const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <HomePage />
    </Suspense>
  );
};
export default App;
