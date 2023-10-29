import React, {useContext, useEffect} from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    colorMode,
    Image,
    Fade,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spacer,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    SunIcon,
    MoonIcon
} from '@chakra-ui/icons';
import Logo from '../../Media/images/logo.png'
import LoginForm from '../Login';
import { GlobalContext } from '../Context';
/**
 * The Header component displays the header section of a website. It includes a toggle for
 * color mode, a navigation menu, and buttons for login and color mode toggle.
 * @returns The rendered Header component.
 */
export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen: isOpenLogin, onClose: onCloseLogin, onToggle: onToggleLogin } = useDisclosure()
    const { isOpen, onClose, onToggle } = useDisclosure()
    const  {login, dataUser} = useContext(GlobalContext)
    useEffect(() => {
      console.log("DataUser", dataUser)
    }, [dataUser])
    

    return (
        <>
            <Box
                as="section"
            >
                <Flex
                    bg={useColorModeValue('gray.800', 'gray.800')}
                    color={useColorModeValue('white', 'white')}
                    // position='fixed'
                    w={'full'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={5}
                    borderStyle={'solid'}
                    borderColor={'brand.primary'}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                            color={'white'}
                        />
                    </Flex>
                    <Flex

                        flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

                        <Image
                            // w='200px'
                            // h="60px"
                            sizeBox={{ base: 'md', md: 'xs' }}
                            objectFit='cover'
                            src={Logo}
                            alt='ESS'
                            mx={2}
                        />

                        <Flex display={{ base: 'none', md: 'flex' }} ml={10} p={3}>
                            <DesktopNav dataUser={dataUser}/>
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>

                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            as={Link}
                            bgGradient="linear(to-r, brand.primary, brand.secondary)"
                            onClick={onToggleLogin}
                            _hover={{
                                bg: 'red.300',
                            }}>
                            connexion
                        </Button>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
            <Fade in={isOpenLogin}>
                <Modal isOpen={isOpenLogin} onClose={onCloseLogin} size="xl" >
                    <ModalOverlay
                      bg='blackAlpha.300'
                      backdropFilter='blur(10px) hue-rotate(90deg)'
                    />
                    <ModalContent>
                        <ModalHeader
                            bg={useColorModeValue('gray.800', 'gray.800')}
                            color={"whiteAlpha.800"}
                        >
                            <Flex

                                flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

                                <Image
                                    // w='200px'
                                    // h="60px"
                                    sizeBox={{ base: 'md', md: 'xs' }}
                                    objectFit='cover'
                                    src={Logo}
                                    alt='ESS'
                                    mx={2}
                                />
                                <Spacer />
                                <Box>
                                    <Text
                                        bgGradient="linear(to-tr, brand.primary, brand.secondary)"
                                        bgClip='text'
                                        fontSize="3xl"
                                        fontWeight={"bold"}>Authentication</Text>
                                </Box>
                            </Flex>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <LoginForm
                                onClose={onCloseLogin}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Fade>
        </>
    );
}

/**
 * Renders a desktop navigation component with links and sub-navigation items.
 * @returns The JSX element representing the desktop navigation component.
 */
const DesktopNav = ({
    dataUser
}) => {
    const linkColor = useColorModeValue('gray.600', 'white');
    const linkHoverColor = useColorModeValue('brand.primary', 'brand.primary');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                navItem?.roles? navItem?.roles?.includes(dataUser?.role) &&
                <Box key={navItem.label} >
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                p={2}
                                rounded={'md'}
                                // color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: "white",
                                    bgGradient: "linear(to-tr,brand.secondary, brand.primary)"
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>:
                <Box key={navItem.label} >
                <Popover trigger={'hover'} placement={'bottom-start'}>
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={navItem.href ?? '#'}
                            fontSize={'sm'}
                            fontWeight={500}
                            p={2}
                            rounded={'md'}
                            // color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: "white",
                                bgGradient: "linear(to-tr,brand.secondary, brand.primary)"
                            }}>
                            {navItem.label}
                        </Link>
                    </PopoverTrigger>

                    {navItem.children && (
                        <PopoverContent
                            border={0}
                            boxShadow={'xl'}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={'xl'}
                            minW={'sm'}>
                            <Stack>
                                {navItem.children.map((child) => (
                                    <DesktopSubNav key={child.label} {...child} />
                                ))}
                            </Stack>
                        </PopoverContent>
                    )}
                </Popover>
            </Box>
            
            ))}
        </Stack>
    );
};

/**
 * A component that represents a desktop sub-navigation item.
 * @param {Object} props - The props for the component.
 * @param {string} props.label - The label of the sub-navigation item.
 * @param {string} props.href - The URL to navigate to when the item is clicked.
 * @param {string} props.subLabel - The sub-label of the sub-navigation item.
 * @returns A React component representing a desktop sub-navigation item.
 */
const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}

            _hover={{ bg: useColorModeValue('brand.primary', 'brand.primary'), color: 'white' }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        // color={useColorModeValue('white', 'gray.800')}
                        transition={'all .3s ease'}
                        // _groupHover={{ color: 'brand.primary' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

/**
 * Renders the mobile navigation component.
 * @returns {JSX.Element} - The rendered mobile navigation component.
 */
const MobileNav = ({
    dataUser
}) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                navItem?.roles? navItem?.roles?.includes(dataUser?.role) &&<MobileNavItem key={navItem.label} {...navItem} dataUser={dataUser} />:<MobileNavItem key={navItem.label} {...navItem} dataUser={dataUser} />
            ))}
        </Stack>
    );
};

/**
 * A component that represents a mobile navigation item.
 * @param {Object} props - The props for the component.
 * @param {string} props.label - The label for the navigation item.
 * @param {ReactNode} props.children - The children elements of the navigation item.
 * @param {string} props.href - The URL to navigate to when the item is clicked.
 * @returns A React component representing a mobile navigation item.
 */
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


/**
 * An array of navigation items, each containing a label and a href.
 * @type {Array<Object>}
 * @property {string} label - The label of the navigation item.
 * @property {string} href - The URL that the navigation item links to.
 */
const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Administration',
        href: '/administration',
        roles:[1]
    },
    {
        label: 'Tasks Management',
        href: '/task',
        roles:[1]
    },
];
