import { ReactNode } from "react";

export const Todo = ({name, children}: {name: string; children?: ReactNode}) => {
    return <div>this is a todo {name} {children}</div>
}