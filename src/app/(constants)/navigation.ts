export const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Products',
        href: '/products',
        submenu: [
            {
                name: 'Solar Solutions',
                href: '/products/solar',
            },
            {
                name: 'Pump Solutions',
                href: '/products/pumps',
            },
        ],
    },
    { name: 'Media', href: '/media' },
    { name: 'Contact Us', href: '/contact' },
];