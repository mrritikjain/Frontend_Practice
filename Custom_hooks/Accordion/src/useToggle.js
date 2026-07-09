import { useState } from "react";

export const useToggle = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(prev => !prev);
    }

    return {
        isOpen,
        toggle
    }
}