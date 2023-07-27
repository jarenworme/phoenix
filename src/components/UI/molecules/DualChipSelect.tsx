import { Text, Flex } from "@chakra-ui/react";
import Chip from "../atoms/Chip";

interface DualChipSelectProps{
    label: string,
    valueLeft: string,
    valueRight: string,
    buttonState: boolean,
    onClick: ()=>void,
    testId: string
}


export default function DualChipSelect({label, valueLeft, valueRight, buttonState, onClick, testId}:DualChipSelectProps){
    return(
        <>
            <Text variant="label" textAlign="left" fontWeight="bold" pl="1.5">
                {label}
            </Text>
            <Flex w="full" my="1" justifyContent="space-between">
                <Chip label={valueLeft} onClick={onClick} state={buttonState} testId="testid"/>
                <Chip label={valueRight} onClick={onClick} state={!buttonState} testId="testid"/>
            </Flex>
        </>
    );
}
