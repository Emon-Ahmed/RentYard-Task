import BottomNavbar from "@/components/BottomNavbar";
import Navbar from "@/components/Navbar";
import SelectPropertyType from "@/components/SelectPropertyType";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar exitTitle="Exit" />
      <div className="border-b-1 border-gray-300"></div>
      <SelectPropertyType />
      <BottomNavbar next="/step-two" nextTitle="Get Start" />
    </div>
  );
}
