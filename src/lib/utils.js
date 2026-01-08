// to use tailwind merge library, we created this file
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}