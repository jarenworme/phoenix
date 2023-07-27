import { Button } from "@chakra-ui/react"

interface TertiaryButtonProps{
    label: string,
    disableCondition: boolean,
    onClick: ()=>void,
    testId: string
}


export default function TertiaryButton({label, disableCondition, onClick, testId}:TertiaryButtonProps){
    return(
        <>
            <Button 
                w="full" 
                variant="solid" 
                mb="4"
                bg="fcib.greyLighter50" 
                color="fcib.black" 
                minH="3.5rem"
                onClick={onClick}
                _hover={{ bg: "fcib.greyLighter30", border: "none" }}
                isDisabled={(disableCondition)} 
                _disabled={{ opacity: '0.4', cursor: 'not-allowed', bgColor: 'fcib.greyLighter40', color: 'fcib.greyLighter10'}}
            >
                {label}
            </Button>
        </>
    );
}
