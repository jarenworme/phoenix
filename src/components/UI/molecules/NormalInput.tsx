import TextLabel from "../atoms/TextLabel"
import InputField from "../atoms/InputField"

interface NormalInputProps{
    label: string,
    type: string,
    value: string,
    placeholder: string,
    onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => void
    onBlur: ()=>void
    testId: string
}


export default function NormalInput({label, type, value, placeholder, onChange, onBlur, testId}:NormalInputProps){
    return(
        <>
            <TextLabel label={label} testId="testid"></TextLabel>
            <InputField type={type} placeholder={placeholder} value={value} testId="testID" onBlur={onBlur} onChange={onChange}/>
        </>
    );
}
