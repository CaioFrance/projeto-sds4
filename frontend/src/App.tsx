import { DataTable } from "components/DataTable";
import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";

export function App() {
  return (
    <>
      <NavBar />
        <div className="container">
          <h1>Hello WOrld</h1>
          <DataTable />
        </div>
      <Footer />
    </>
  );
}
