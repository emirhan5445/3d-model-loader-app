import React from "react";

function App() {
  return (
    <>
      <div className="online_3d_viewer" style={{width: "600px", height: "500px", border: "1px solid #000"}}
        model="/models/arduino.step"
        environmentmap="build/envmaps/fishermans_bastion/posx.jpg,build/envmaps/fishermans_bastion/negx.jpg,build/envmaps/fishermans_bastion/posy.jpg,build/envmaps/fishermans_bastion/negy.jpg,build/envmaps/fishermans_bastion/posz.jpg,build/envmaps/fishermans_bastion/negz.jpg">
      </div>
    </>
  );
}

export default App;
