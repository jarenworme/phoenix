import { Text, Heading } from "@chakra-ui/react"

interface NormalInputProps{
    title: string,
    text: string,
    testId: string
}


export default function HeaderText({title, text, testId}:NormalInputProps){
    return(
        <>
            <Heading as="h1" color="fcib.accentRed" textAlign="left" fontWeight="bold" fontSize="3xl">
                    {title}
                </Heading>
                <Text color="gray.600" fontWeight="semibold" textAlign="left">
                    {text}
                </Text>
            
        </>
    );
}
