import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am István!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={8}>
    <VStack spacing={4}>
      <Avatar name="István" src="https://pbs.twimg.com/profile_images/1585915675654119425/2on7Frje_400x400.jpg" size="2xl"/>
      <Heading size="md">{greeting}</Heading>
    </VStack>
    <Heading size="2xl">{bio1}</Heading>
    <Heading size="2xl">{bio2}</Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
