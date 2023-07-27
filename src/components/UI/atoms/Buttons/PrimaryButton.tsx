import { Button } from "@chakra-ui/react"

interface PrimaryButtonProps{
    label: string,
    disableCondition: boolean,
    onClick: ()=>void,
    testId: string
}


export default function PrimaryButton({label, disableCondition, onClick, testId}:PrimaryButtonProps){
    return(
        <>
            <Button 
                w="full" 
                variant="solid"
                bg="fcib.accentRed" 
                color="fcib.white" 
                minH="3.5rem"
                onClick={onClick}
                _hover={{ bg: "fcib.accentRedDarker20", border: "none" }}
                isDisabled={(disableCondition)} 
                _disabled={{ opacity: '0.4', cursor: 'not-allowed', bgColor: 'fcib.greyLighter50', color: 'fcib.greyLighter20'}}
            >
                {label}
            </Button>
        </>
    );
}
