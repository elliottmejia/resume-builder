import {useEffect} from 'react'


const CtrlOverride = ({onPress}: { onPress: VoidFunction }) => {
    useEffect(()=>{
        const isMac = navigator.userAgentData?.platform?.toUpperCase().includes("MAC") ??
                      navigator.platform.toUpperCase().includes("MAC");
        const combo = (e: KeyboardEvent) =>
          (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "p";

        const handler = (e: KeyboardEvent) => {
            if (combo(e)) onPress();
        }

        const ignore = (e: KeyboardEvent) => {
            if (combo(e)) e.preventDefault();
        }

        window.addEventListener("keyup", handler);
        window.addEventListener("keydown", ignore);

        return () => {
            window.addEventListener("keyup", handler);
            window.addEventListener("keydown", ignore);
        }
    },[]);
    return null;
}

export default CtrlOverride
