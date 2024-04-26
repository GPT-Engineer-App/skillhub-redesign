import { Box, Flex, Heading, Text, Button, Image, SimpleGrid, Icon, VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import { FaUserGraduate, FaBriefcase, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex direction="column" align="center" m={4}>
        <Image src="https://images.unsplash.com/photo-1704627105594-d3c320e970e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbmRocmElMjBQcmFkZXNoJTIwc2t5bGluZXxlbnwwfHx8fDE3MTQxMTU4NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" w="full" h={{ base: "200px", md: "400px" }} objectFit="cover" />
        <Heading as="h1" size="xl" mt={5} textAlign="center">
          AP-SSDC: Empowering Andhra's Youth
        </Heading>
        <Text fontSize="lg" mt={2} textAlign="center">
          Join us in our mission to skill and uplift through comprehensive courses and job fairs.
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} p={5}>
        <InfoCard icon={FaUserGraduate} title="Courses" description="Explore a variety of courses designed to enhance your skills." />
        <InfoCard icon={FaBriefcase} title="Job Mela" description="Find exciting job opportunities tailored to your skills." />
        <InfoCard icon={FaCalendarAlt} title="Events" description="Participate in workshops and seminars to boost your career." />
        <InfoCard icon={FaPhoneAlt} title="Support" description="Get in touch with us for guidance and support." />
      </SimpleGrid>

      <Flex direction="column" align="center" my={10}>
        <Heading as="h2" size="lg">
          Why Choose AP-SSDC?
        </Heading>
        <Text fontSize="md" mt={3} p={3} textAlign="center">
          We are dedicated to providing the youth of Andhra Pradesh with the tools and opportunities to succeed in their careers.
        </Text>
        <Button colorScheme="blue" mt={5}>
          Learn More
        </Button>
      </Flex>

      <Flex direction={isMobile ? "column" : "row"} justify="space-around" p={5} bg="gray.100">
        <VStack spacing={5}>
          <Heading as="h3" size="md">
            Contact Us
          </Heading>
          <Text>AP-SSDC, Vijayawada, Andhra Pradesh</Text>
          <Text>Email: contact@apssdc.in</Text>
          <Text>Phone: +91 123 456 7890</Text>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbmRocmElMjBQcmFkZXNoJTIwZ292ZXJubWVudCUyMGJ1aWxkaW5nfGVufDB8fHx8MTcxNDExNTg2M3ww&ixlib=rb-4.0.3&q=80&w=1080" w="300px" h="200px" objectFit="cover" />
      </Flex>
    </Box>
  );
};

const InfoCard = ({ icon, title, description }) => (
  <VStack spacing={3} p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Heading as="h4" size="md">
      {title}
    </Heading>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

export default Index;
