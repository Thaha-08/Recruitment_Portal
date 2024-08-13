import FooterSection from "./FooterSection";

import ListTopicSection from "./ListTopicSection";
import ReviewSection from "./ReviewSection";

import StatisticSection from "./StatisticSection";
import SubscriptionSection from "./SubscriptionSection";
import WelcomeHeroSection from "./WelcomeHeroSection";
import Worksection from "./Worksection";

function DirectoryLanding() {
  return (
    <div>
      <WelcomeHeroSection></WelcomeHeroSection>
      <ListTopicSection></ListTopicSection>
      <Worksection></Worksection>
      <ReviewSection></ReviewSection>
      <StatisticSection></StatisticSection>
      <SubscriptionSection></SubscriptionSection>
      <FooterSection></FooterSection>
    </div>
  );
}

export default DirectoryLanding;
