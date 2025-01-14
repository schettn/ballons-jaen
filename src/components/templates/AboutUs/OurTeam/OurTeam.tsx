import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"
import OurBoss from "./OurBoss"
import TeamMember from "./TeamMember"

interface IOurTeamProps {}

const OurTeam: FC<IOurTeamProps> = () => {
  const teamMembers = [
    {
      image: "/images/about_us/sectionProfile.png",
      name: "Inge T.",
      qoute: "“Unser Fels in der Brandung”",
      qualities: [
        "flexibel und hoch energetisch",
        "hilft immer mit wo’s brennt",
        "die beste Mischung aus Erfahrung und Routine",
      ],
      isLeft: true,
      role: "Unser Fels in der Brandung",
      about:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
    {
      image: "/images/about_us/sectionProfile.png",
      name: "Silvia F.",
      qoute: "“Die Akribische”",
      qualities: [
        "erst zufrieden, wenn der Kunde zufrieden ist",
        "Perfektionistin",
        "liebt Checklisten",
      ],
      role: "Unser Fels in der Brandungr",
      isLeft: false,
      about:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
    {
      image: "/images/about_us/sectionProfile.png",
      name: "Monika K.",
      qoute: "“Die Vorausschauende”",
      qualities: [
        "überschaut",
        "während der Chef noch",
        "wieder alles im Griff",
      ],
      role: "Ballon Meister",
      isLeft: true,
      about:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
    {
      image: "/images/about_us/sectionProfile.png",
      name: "Slavko",
      qoute: "“Die Extraportion Energie”",
      qualities: [
        "erst zufrieden, wenn der Kunde zufrieden ist",
        "Perfektionistin",
        "liebt Checklisten",
      ],
      role: "Ballon Meister",
      isLeft: false,
      about:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
    {
      image: "/images/about_us/sectionProfile.png",
      name: "Monika K.",
      qoute: "“Die Organisatorin”",
      qualities: [
        "rettet regelmäßig die Welt",
        "bekannt für ihre schnelle Lösungen",
        "jeden Tag eine neue",
      ],
      role: "Ballon Meister",
      isLeft: true,
      about:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
  ]

  const bossData = {
    image: "/images/about_us/bossProfile.png",
    name: "Nik D.",
    qoute: "“Der Boss”",
    qualities: [
      "geht erst heim, wenn wirklich alles passt",
      "wechselt zwischen Kopf- und Bauchgefühl",
      "kreativ und analytisch",
    ],
    role: "BOSS",
    isLeft: false,
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  }

  return (
    <>
      <Box
        pos="relative"
        top={{ base: "-10rem", xl: "-25rem" }}
        mb={{ base: "-10rem", xl: "-25rem" }}
        bgImage="/images/about_us/ballon_bg_big.svg"
        bgRepeat="no-repeat"
        pt={{
          base: "10rem",
          md: "16rem",
          lg: "24rem",
          xl: "32rem",
          "2xl": "40rem",
        }}
        pb="6.25rem"
        bgSize="cover"
      >
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <VStack>
            <Flex gap={{ base: 2, md: 4 }}>
              <Heading
                size="h6020"
                as="span"
                fontWeight="semibold"
                whiteSpace="nowrap"
              >
                Unser
              </Heading>
              <Text mb="-20 !important" as="span" variant="cursive" size="80">
                Team
              </Text>
            </Flex>
            <Heading size="h3015">Steckbrief</Heading>
          </VStack>
        </Container>
        <Box
          bgImage={{ md: "/images/about_us/thread1.svg" }}
          bgRepeat="no-repeat"
          bgPos="0"
          bgSize="contain"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={teamMembers[0]} />
            <TeamMember member={teamMembers[1]} />
          </Container>
        </Box>
        <Box
          bgImage={{ md: "/images/about_us/side_shape.svg" }}
          bgRepeat="no-repeat"
          bgPos="right -8rem bottom 0"
          bgSize="20rem"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={teamMembers[2]} />
          </Container>
        </Box>
        <Box
          bgImage={{ md: "/images/about_us/shape_thread.svg" }}
          bgRepeat="no-repeat"
          bgPos="0"
          bgSize="contain"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={teamMembers[3]} />
            <TeamMember member={teamMembers[4]} />
          </Container>
        </Box>
      </Box>
      <OurBoss member={bossData} />
    </>
  )
}
export default OurTeam
