import React, { useState } from "react";
import { Stack, VStack } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import TertiaryButton from "../UI/atoms/Buttons/TertiaryButton";
import PrimaryButton from "../UI/atoms/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

// notes:
// things to implemenet here that I'm not sure about, like the timer

export default function VerifyEmail () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleCancel = () => navigate('/register', { replace: false });
    const handleSubmit = () => navigate('/selectProducts', { replace: false });

    const [verification, setVerification] = useState('');
    const handleVerificationChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setVerification(e.target.value)

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                <HeaderText title="Verify Your Email Address" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                </VStack>
                <NormalInput
                    label="Verification Code" 
                    placeholder="" 
                    type="number" 
                    value={verification} 
                    onChange={handleVerificationChange} 
                    onBlur={function (){}} 
                    testId="emailInput"
                />
                <TertiaryButton label="Cancel" disableCondition={false} testId="testid" onClick={handleCancel}/>
                <TertiaryButton label="Resend Code" disableCondition={false} testId="testid" onClick={function(){}}/>
                <PrimaryButton label="Submit" disableCondition={false} testId="testid" onClick={handleSubmit}/>
            </VStack>
        </Stack>
    );
}
