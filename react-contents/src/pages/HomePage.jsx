import WelcomeMessage from "../components/HomePage/WelcomeMessage";
import Card1 from "../components/HomePage/Card1";
import Card2 from "../components/HomePage/Card2";
import Card3 from "../components/HomePage/Card3";

export default function HomePage() {
  return (
    <div>
        <WelcomeMessage/>
        <div className="flex justify-center items-center gap-10">
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
    </div>
  );
}
