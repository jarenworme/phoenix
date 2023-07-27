import { Box, Text } from "@chakra-ui/react"

interface ErrorBoxProps{
    label: string,
    testId: string
}


export default function ErrorBox({label, testId}:ErrorBoxProps){
    return(
        <>
            <Box 
            bgColor="fcib.accentRedLighter90" 
            p="0.75rem" 
            borderRadius="8px" 
            minH="3.5rem" 
            w="full"
            >
                <Text color="fcib.accentRedDarker10" fontSize="md">
                    {label}
                </Text>
            </Box>
        </>
    );
}
