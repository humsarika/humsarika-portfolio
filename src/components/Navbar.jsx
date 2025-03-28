import { useState } from "react";
import { Box, Flex, Link, IconButton } from "@chakra-ui/react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bg="white" px={6} py={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Box fontSize="xl" fontWeight="bold" color="gray.800">
          Humsarika
        </Box>

        {/* Hamburger Menu - Mobile */}
        <IconButton
          display={{ base: "block", md: "none" }}
        //   icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          color="gray.800"
          aria-label="Toggle Menu"
        />

        {/* Links */}
        <Flex
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          flexDirection={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          position={{ base: "absolute", md: "static" }}
          top="60px"
          left="0"
          width="100%"
          bg={{ base: "white", md: "transparent" }}
          py={{ base: 4, md: 0 }}
          gap={6}
        >
          <Link color="gray.800" fontSize="lg">
            Home
          </Link>
          <Link color="gray.800" fontSize="lg">
            Projects
          </Link>
          <Link color="gray.800" fontSize="lg">
            About
          </Link>
          <Link color="gray.800" fontSize="lg">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
