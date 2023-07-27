import { Select } from "@chakra-ui/react";
import TextLabel from "../atoms/TextLabel";

interface DropdownProps{
    label: string,
    placeholder: string,
    dataArray: Array<string>,
    testId: string
}


export default function Dropdown({label, placeholder, dataArray, testId}:DropdownProps){
    return(
        <>
            <TextLabel label={label} testId="testid"></TextLabel>
            <Select placeholder={placeholder} mt="0.375rem" minH="3.5rem">
                {dataArray.map((user) => (
                    <option>{user}</option>
                ))}
            </Select>
        </>
    );
}
