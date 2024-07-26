import Sidepanel from "@/components/homepage/sidepanel";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <Sidepanel side="left"/>
      <Sidepanel side="right" />
      <div className="text-center z-10">
        <Typography variant="h1">Track. Learn. Improve.</Typography>
        <Typography variant="subtitle1" className="">
          <Box component="span" fontWeight={"bold"} color={"primary.main"}>
            Track
          </Box>{" "}
          your blood sugar levels.{" "}
          <Box component="span" fontWeight={"bold"} color={"primary.main"}>
            Learn
          </Box>{" "}
          about your diabetes. <br />
          <Box component="span" fontWeight={"bold"} color={"primary.main"}>
            Improve
          </Box>{" "}
          your health.
        </Typography>
      </div>
      <section className="flex justify-center items-start gap-8 w-full text-center z-10">
        <Box bgcolor={"primary.main"} className="w-[15rem] aspect-square">
          <Typography variant="h3" fontSize={"2rem"} fontWeight={"bold"}>
            Blood sugar tracking
          </Typography>
        </Box>
        <Box bgcolor={"primary.main"} className="w-[35rem] aspect-video mt-2">
          <Typography variant="h3" fontSize={"3rem"} fontWeight={"bold"}>
            Sign up
          </Typography>
        </Box>
        <Box
          bgcolor={"primary.main"}
          sx={{ borderRadius: "10%" }}
          className="w-[15rem] aspect-square"
        >
          <Typography variant="h3" fontSize={"2rem"} fontWeight={"bold"}>
            Medicine & Insulin reminders
          </Typography>
        </Box>
      </section>
    </main>
  );
}
