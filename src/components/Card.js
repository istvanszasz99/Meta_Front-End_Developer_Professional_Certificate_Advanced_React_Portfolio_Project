import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <Box backgroundColor="white" textColor="black" rounded="2xl">
        <VStack>
          <Image src={imageSrc} alt={title} rounded="2xl" />
          <Box paddingX={5}>
            <Heading paddingY={5} size="md">{title}</Heading>
            <Text>{description}</Text>
            <HStack paddingY={5} spacing={2}>
              <Text fontWeight="bold"><a href={url}>See More</a></Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Card;