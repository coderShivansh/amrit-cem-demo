import HomeDashboard from "@/components/HomeDashboard";
export const metadata = {
  title: "Amrit Cem Dashboard",
  description: "Central dashboard for managing meetings, reports, and performance.",
};
export default function Home() {
  return (
    <main> {/* padding-top to avoid overlapping with navbar */}
   
      <HomeDashboard/>

  </main>
  );
}
