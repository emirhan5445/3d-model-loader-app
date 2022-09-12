import React from "react";

function App() {
  return (
    <>
      <div className="online_3d_viewer" style={{width: "600px", height: "500px", border: "1px solid #000"}}
        model="/models/crystal.wrl">
      </div>
    </>
  );
}

export default App;