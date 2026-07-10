// data/projects.ts

const projects = [
    {
        href: "https://github.com/DAH300/DwaynePortfolio",
        title: "Portfolio Site (This!)",
        description:
            "Full-stack personal site built with Next.js 15, Tailwind CSS, and Docker. Features hot reloading in development and automatic redeployment on every GitHub commit via CI/CD pipeline.",
        tags: ['Next.js', 'React', 'TypeScript', 'Docker', 'Frontend', 'Full-Stack', 'CI/CD'],
    },
    {
        href: "https://github.com/DAH300/MPLABXProjects",
        title: "Embedded Temp Monitor (PIC)",
        description:
            "Reads DS18B20 sensor via 1-Wire and displays real-time temperature using an I2C LCD on a PIC16F877A. Timers, interrupts, and bit-banging used extensively.",
        tags: ['Embedded Systems', 'PIC16F877A', 'I2C', 'C', 'Low-Level Programming'],

    },
    {
        href: "https://github.com/DAH300/Bills_App",
        title: "Self-Updating Python App",
        description:
            "A Python application packaged as a `.exe` that checks GitHub for updates and relaunches itself when a new version is available. Built with PyInstaller and GitHub Releases API.",
        tags: ['Python', 'GitHub', 'Auto-Updater', 'CI/CD'],
    },
];

export default projects;