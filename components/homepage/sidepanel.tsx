import clsx from "clsx"

export default function Sidepanel({ side }: Readonly<{ side: "left" | "right" }>) {
  return (
    <div className={clsx("top-30 absolute bg-neutral-400 h-screen w-1/3 rounded-3xl z-0  backdrop-blur-sm opacity-25 shadow dark:bg-neutral-950", {
      "-left-[15%] skew-x-12 rotate-6": side === "left",
      "-right-[15%] -skew-x-12 -rotate-6": side === "right",
    })}>

    </div>
  );
}
