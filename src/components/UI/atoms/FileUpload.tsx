import { Input } from "@chakra-ui/react"

interface ErrorBoxProps{
    label: string,
    testId: string
}


export default function FileUpload({label, testId}:ErrorBoxProps){
    return(
        <>
            <Input 
                placeholder={label} 
                type="file" 
                accept=".jpeg,.jpg,.doc,.pdf,.png"
                color="fcib.accentRedDarker10"
                p="0.75rem" 
                borderRadius="8px" 
                minH="3.5rem" 
                w="full"
            />
        </>
    );
}
