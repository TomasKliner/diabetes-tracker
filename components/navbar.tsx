import { Button } from "@mui/material";
import Image from "next/image";

export default function navbar() {
  return (
    <nav className="flex justify-between items-center gap-4 font-medium text-xl p-4 container mx-auto border-8">
        <Image src="/logo.png" width={100} height={100} alt="logo" className="w-12 h-12" />
      <div className="flex gap-4 items-center justify-center">
        <div>Tracker</div>
        <div>Settings</div>
      </div>
      <Button variant="contained"  >Sign Up</Button>
    </nav>
  );
}
