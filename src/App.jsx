import { useState } from "react";

import DataTable from "./components/Table";
import Nav from "./components/Nav";
export default function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <header>
        <Nav setData={setData} />
      </header>
      <div className="container mx-auto text-center flex justify-center">
        <DataTable data={data} />
      </div>
    </div>
  );
}
