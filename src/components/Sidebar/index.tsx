import React, { ReactNode, useEffect, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { IconType } from 'react-icons';

import HansenLogo from '@assets/logo/hansen-logo.png';
import { useNavigate } from 'react-router-dom';
import { LinkItemProps } from '@configs/sidebar';

export const Sidebar = ({
  children,
  config,
}: {
  children: ReactNode;
  config: Array<LinkItemProps>;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        config={config}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} config={config} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
  config: Array<LinkItemProps>;
}

const SidebarContent = ({ onClose, config, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(0);

  useEffect(() => {
    navigate(config[0].route);
  }, []);

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={HansenLogo} boxSize="50px" objectFit="cover" />
        <Text fontSize="sm" fontWeight="medium">
          Automation Tool
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <div className="border border-gray-300 h-px"></div>
      <div className="mt-5">
        {config.map((link, index) => (
          <NavItem
            key={link.name}
            icon={activeMenu === index ? link.activeIcon : link.icon}
            onClick={() => {
              navigate(link.route);
              setActiveMenu(index);
            }}
          >
            <Text
              fontWeight={activeMenu === index ? 'bold' : 'light'}
              size="sm"
            >
              {link.name}
            </Text>
          </NavItem>
        ))}
      </div>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: any;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="25"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <div className="ml-5 flex flex-row items-center">
        <Image src={HansenLogo} boxSize="50px" objectFit="cover" />
        <Text fontSize="sm" fontWeight="medium" className="ml-3">
          Automation Tool
        </Text>
      </div>
    </Flex>
  );
};
