import { BarChar } from "components/BarChart";
import { DataTable } from "components/DataTable";
import { DonautChar } from "components/DonautChart";
import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";

export function Dashboard() {
  return (
    <>
      <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">DashBoard de Vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso</h5>
              <BarChar />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso</h5>
              <DonautChar />
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-primary">Todas as vendas</h2>
          </div>
          <DataTable />
        </div>
      <Footer />
    </>
  )
}