import BottomNavbar from "@/components/BottomNavbar";
import Navbar from "@/components/Navbar";
import SelectPropertyType from "@/components/SelectPropertyType";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="border-b-1 border-gray-300"></div>
      <SelectPropertyType />

      <BottomNavbar />
    </div>
  );
}
