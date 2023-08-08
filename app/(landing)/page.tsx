import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import LandContent from "@/components/landcontent"
const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandContent />
    </div>
   );
}
 
export default LandingPage;
