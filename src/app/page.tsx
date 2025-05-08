import { Header } from "@/components/server-components/Header";
import { AboutMe } from "@/components/server-components/AboutMe";
import { MyStack } from "@/components/client-components/MyStack";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <MyStack />
      </main>
    </div>
  );
}
