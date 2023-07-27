import { Button } from "@chakra-ui/react"

interface GhostButtonProps{
    label: string,
    disableCondition: boolean,
    onClick: ()=>void,
    testId: string
}


export default function GhostButton({label, disableCondition, onClick, testId}:GhostButtonProps){
    return(
        <>
            <Button 
                w="full" 
                variant="solid"
                bg="none" 
                color="fcib.black" 
                minH="3.5rem"
                onClick={onClick}
                _hover={{ bg: "none", border: "none" }}
                isDisabled={(disableCondition)} 
                _disabled={{ opacity: '0.4', cursor: 'not-allowed', bgColor: '', color: 'fcib.greyLighter20'}}
            >
                {label}
            </Button>
        </>
    );
}
