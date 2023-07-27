import { Button } from "@chakra-ui/react"

interface SecondaryButtonProps{
    label: string,
    disableCondition: boolean,
    onClick: ()=>void,
    testId: string
}


export default function SecondaryButton({label, disableCondition, onClick, testId}:SecondaryButtonProps){
    return(
        <>
            <Button
                w="full" 
                variant="solid"
                bg="fcib.blueDarker60" 
                color="fcib.white" 
                minH="3.5rem"
                onClick={onClick}
                _hover={{ bg: "fcib.blueDarker70", border: "none" }}
                isDisabled={(disableCondition)} 
                _disabled={{ opacity: '0.4', cursor: 'not-allowed', bgColor: 'fcib.greyLighter50', color: 'fcib.greyLighter20'}}
            >
                {label}
            </Button>
        </>
    );
}
