import "react-notion/src/styles.css";
import React from "react";
import { BlockMapType, NotionRenderer } from "react-notion";

declare global {
  interface Window {
    data: Record<string, unknown>;
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const App: React.FC = () => {
  return <NotionRenderer blockMap={window.data as BlockMapType} />;
};

export default App;
