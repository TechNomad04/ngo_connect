import WelcomeMessage from "../components/HomePage/WelcomeMessage";
import Card from "../components/HomePage/Card";

export default function HomePage() {
  return (
    <div>
        <WelcomeMessage/>
        <div className="flex justify-center items-center gap-10">
            <Card
                stats="100+"
                category="NGOs"
                description="Trusted NGOs working on various causes."
            />
            <Card
                stats="500+"
                category="Volunteerss"
                description="Passionate people joining hands to help."
            />
            <Card
                stats="1000+"
                category="Donations"
                description="Support that creates real impact."
            />
        </div>
    </div>
  );
}
