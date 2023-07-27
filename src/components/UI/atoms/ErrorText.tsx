import { Text } from "@chakra-ui/react"

interface ErrorTextProps{
    label: string,
    testId: string
}


export default function ErrorText({label, testId}:ErrorTextProps){
    return(
        <>
            <Text textAlign="left" color="fcib.errorText" fontSize="sm" pl="1.5" data-testid={testId}>
                {label}
            </Text>
        </>
    );
}
