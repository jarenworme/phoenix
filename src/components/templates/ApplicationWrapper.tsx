import React from "react";
import { VStack } from "@chakra-ui/react";
import NavBar from "../UI/organisms/NavBar";

interface ApplicationWrapperProps {
    children?: React.ReactNode
}


export default function ApplicationWrapper({ children }: ApplicationWrapperProps){
    return (
        <VStack >
            <NavBar></NavBar>
            { children }
        </VStack>
    );
}
