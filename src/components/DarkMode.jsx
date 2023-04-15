import { Fade } from "react-awesome-reveal";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useState } from "react";

const DarkMode = () => {
    const {theme, setTheme} = useTheme();
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };
  
    
    return (
        <div className="fixed right-6 top-6" onClick={() => handleClick()}>
            <Fade triggerOnce direction="down" delay={600}>
            <button
                className="bg-black dark:bg-slate-100 text-slate-100 dark:text-black p-2 rounded-xl"
            >
                { click ? <RiMoonFill size={25} /> : <RiSunLine size={25} /> }
            </button>
            </Fade>
        </div>
    );
}

export default DarkMode;