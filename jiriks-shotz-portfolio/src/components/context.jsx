/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

const ContextAPI = ({ children }) => {
    const [searchValue, setSearchValue] = useState("wedding");
    const [mode, setMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches || false
    );
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchItem = formData.get("search");
        setSearchValue(searchItem);
    };

    const handleMode = () => {
        localStorage.setItem("mode", !mode);
        const booleanResult = localStorage.getItem("mode") === "true";
        setMode(booleanResult);
        document.querySelector("body").classList.toggle("darkmode");
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        localStorage.setItem("mode", mode);

        if (localStorage.getItem("mode") === "true") {
            document.querySelector("body").classList.add("darkmode");
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                searchValue,
                handleSubmit,
                mode,
                handleMode,
                setIsNavbarOpen,
                isNavbarOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default ContextAPI;
