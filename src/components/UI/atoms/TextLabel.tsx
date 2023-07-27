import { Text } from "@chakra-ui/react"

interface TextLabelProps{
    label: string,
    testId: string
}


export default function TextLabel({label, testId}:TextLabelProps){
    return(
        <>
            <Text w="full" variant="label" textAlign="left" fontWeight="bold" pl="1.5">
                {label}
            </Text>
        </>
    );
}
