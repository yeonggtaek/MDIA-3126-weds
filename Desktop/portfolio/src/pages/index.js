import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Animation } from "@/components/Animation";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center gap-[20rem]">
          <div className="text-[36px] font-semibold">
            Hello! I’m Yeongtaek
            <br />
            I’m a Web Designer & Developer!
          </div>
          <div>
          <Animation />
          </div>
        </div>
        <Intro />
        <div className="text-[36px] font-semibold">
          Projects
        </div>
        <Projects />
      </div>
    </Layout>
  );
}
