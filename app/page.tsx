import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(`${process.env.HOST_URL}/api`);
  return {
    title: "Degen token stats",
    description: "Degen token stats",
    other: frameTags,
  };
}

export default function Home() {
  return (
    <h2>
      Check out the degen token stats <a href="https://warpcast.com/magiziz/0x4e827ca4">here</a>
    </h2>
  );
}
