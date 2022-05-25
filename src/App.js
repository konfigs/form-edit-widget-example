import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    window.activateFormEditWidget();
  }, []);
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      <div
        id="form-edit-config"
        api-key="YOUR-APIKEY"
        node-id="YOUR-NODE-ID"
        application-id="YOUR-APPLICATION-ID"
      ></div>
    </div>
  );
}

export default App;
