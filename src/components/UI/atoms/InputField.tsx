import { Input } from "@chakra-ui/react"

interface InputFieldProps{
    type: string,
    value: string,
    placeholder: string,
    onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => void
    onBlur: ()=>void
    testId: string
}


export default function InputField({type, value, placeholder, onChange, onBlur,testId}:InputFieldProps){
    return(
        <>
            <Input
                type={type}
                padding="4"
                mt="0.375rem"
                minH="3.5rem"
                w="full"
                placeholder={placeholder}
                value={value}
                data-testid={testId}
                onChange={onChange}
                onBlur={onBlur}
            ></Input>
        </>
    );
}
