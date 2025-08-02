import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

// Comienza la definición del componente principal para la página del dashboard
// Como es una función `async`, puede obtener datos desde el servidor antes de renderizar
export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  

  return (
    // Sección principal del contenido de la página
    <main>
      {/* Título del dashboard con estilo de fuente y tamaño ajustado */}
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      {/* Grid de 4 columnas para mostrar tarjetas de resumen (ingresos, facturas, etc.) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Estas líneas están comentadas y aún no muestran nada. 
            Cada <Card> representa un indicador: pagos recibidos, pendientes, etc. */}
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>

      {/* Grid para mostrar el gráfico de ingresos y la lista de últimas facturas */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* Componente para mostrar el gráfico de ingresos */}
        <RevenueChart revenue={revenue} />

       
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
