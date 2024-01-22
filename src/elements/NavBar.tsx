import React, {useEffect, useState} from 'react';
import {Box, Drawer, IconButton, List, ListItem, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import theme from "./Theme";
import ResizableImage from "./ResizableImage";
import SocialMediaIcon from "./SocialMediaIcon";
import {Telegram, WhatsApp} from "@mui/icons-material";
import NavButton from "./NavButton";

const NavBar: React.FC<{ textColor?: string }> = ({textColor}) => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [iconWidth, setIconWidth] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const buttons = [
        {text: 'Home', route: '/'},
        {text: 'Why us', route: '/approach'},
        {text: 'Program', route: '/our-program'},
        {text: 'Pricing', route: '/pricing'},
        {text: 'Enroll', route: '/enroll'},
    ];
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIconWidth(70);
        } else {
            if (scrolled) {
                setIconWidth(70);
            } else {
                setIconWidth(135);
            }
        }
    }, [isMobile, scrolled]);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const drawer = (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
        >
            <List>
                {buttons.map((buttonData) => (
                    <ListItem key={buttonData.text}>
                        <NavButton
                            route={buttonData.route}
                            children={buttonData.text}
                            textColor={'black'}
                        />
                    </ListItem>
                ))}
                <ListItem>
                    <SocialMediaIcon href={'https://t.me/+381616140475'}>
                        <Telegram color={'warning'} fontSize={'large'}/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={'https://wa.me/381616140475'}>
                        <WhatsApp color={'warning'} fontSize={'large'}/>
                    </SocialMediaIcon>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <Box
            alignItems={scrolled ? 'center' : 'top'}
            padding={isMobile ? '8px' : '25px'}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: scrolled ? 'white' : 'transparent',
                transition: 'all 0.3s ease-in-out',
                width: '100vw',
            }}
        >
            <Box width={iconWidth}>
                <ResizableImage src='/logo.png'/>
            </Box>
            {isMobile ? (
                <>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        sx={{mr: 2}}
                    >
                        <MenuIcon color={scrolled ? 'secondary' : 'primary'}/>
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerClose}
                    >
                        {drawer}
                    </Drawer>
                </>
            ) : (
                <>
                    <NavButton route='/' children='Home' textColor={scrolled ? 'black' : textColor}/>
                    <NavButton route='/approach' children='Why us' textColor={scrolled ? 'black' : textColor}/>
                    <NavButton route='/our-program' children='Program' textColor={scrolled ? 'black' : textColor}/>
                    <NavButton route='/pricing' children='Pricing' textColor={scrolled ? 'black' : textColor}/>
                    <NavButton route='/enroll' children='Enroll' textColor={scrolled ? 'black' : textColor}/>
                </>
            )}
            {!isMobile && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'fit-content',
                        borderRadius: '30px',
                        backgroundColor: theme.palette.secondary.main
                    }}>
                    <SocialMediaIcon href={'https://t.me/+381616140475'}>
                        <Telegram color={'info'} fontSize={'large'}/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={'https://wa.me/381616140475'}>
                        <WhatsApp color={'info'} fontSize={'large'}/>
                    </SocialMediaIcon>
                </Box>
            )}
        </Box>
    );
};

export default NavBar;
