import { Button } from "@chakra-ui/react"

interface ChipProps{
    label: string,
    onClick: () => void,
    state: boolean,
    testId: string
}


export default function Chip({label, onClick, state, testId}:ChipProps){
    return(
        <>
            <Button
                data-testid={testId}
                padding="0"
                mt="0.375rem"
                minH="3.5rem"
                w="45%"
                onClick={onClick}
                bgColor={state ? 'fcib.blueLighter90' : 'fcib.white'}
                borderColor={state ? 'fcib.blueDarker40' : 'fcib.greyLighter40'}
                borderRadius="0.75rem"
                borderWidth="1px"
                _active={{border: "none"}}
                _hover={{bgColor: ""}}
            >
                {label}
            </Button>
        </>
    );
}
