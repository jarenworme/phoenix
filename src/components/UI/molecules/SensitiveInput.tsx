import { InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import TextLabel from "../atoms/TextLabel";
import InputField from "../atoms/InputField";

interface SensitiveInputProps{
    label: string,
    type: string,
    value: string,
    placeholder: string,
    showSensitiveInfo: string,
    onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => void,
    onBlur: ()=>void,
    onClick: ()=>void,
    testId: string
}


export default function SensitiveInput({label, type, value, placeholder, showSensitiveInfo, onChange, onBlur, onClick, testId}:SensitiveInputProps){
    return(
        <>
           <TextLabel label={label} testId="testid"></TextLabel>
            <InputGroup>
                <InputField type={type} placeholder={placeholder} value={value} testId="testID" onBlur={onBlur} onChange={onChange}/>
                <InputRightElement w="64px" h="100%">
                    <Button
                        variant="link"
                        textDecoration="none"
                        border="none"
                            
                        color="#3C7AA6"
                        onClick={onClick}
                    >
                        {showSensitiveInfo}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </>
    );
}
