import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack, Text, Button } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import SensitiveInput from "../UI/molecules/SensitiveInput";
import ErrorText from "../UI/atoms/ErrorText";
import TertiaryButton from "../UI/atoms/Buttons/TertiaryButton";
import PrimaryButton from "../UI/atoms/Buttons/PrimaryButton";
import ErrorBox from "../UI/atoms/ErrorBox";

// notes:
// test password is P@ssw0rd
// test email is a@b.com

export default function StartContinue () {
    // functions to control rountes of bottom buttons
    const navigate = useNavigate();
    const handleRegister = () => navigate('/register', { replace: false }); 
    const successfulLoginRedirect = () => navigate('/selectProducts', { replace: false })

    const [showPassword, setShowPassword] = useState(false);

    // normal input functions and states
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleEmailChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handlePasswordChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)

    const [loginError, setLoginError] = useState('');

    // placeholder
    let databasePassword = "P@ssw0rd";
    let databaseEmail = "a@b.com";

    const handleLoginClick = () => {
        if (password === '' ) {
            setPasswordError('Please Enter Password');
        } else {
            setPasswordError('');
        }
        if (email === '') {
            setEmailError('Please Enter Email');
        } else {
            setEmailError('');
        }
        if ((password !== databasePassword || email !== databaseEmail) && (password != '' && email != '')) {
            setLoginError('It looks like your Email or password is incorrect. Please try again.');
        } else if (password != '' && email != '') {
            setLoginError('');
            successfulLoginRedirect();
        }
    };

    const handlePasswordClick = () => setShowPassword(!showPassword);

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                <HeaderText title="Start or Continue Your Application" text="" testId="testid"/>
                </VStack>
                <VStack alignItems="stretch">
                    <VStack alignItems="start">
                        <NormalInput label="Email" placeholder="Email" type="email" value={email} onChange={handleEmailChange} onBlur={function (){}} testId="emailInput" />
                        { emailError && (
                            <ErrorText label={emailError} testId="testid"/>
                        )}
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <SensitiveInput label="Password" placeholder="Your Password" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} onBlur={function (){}} testId="passwordInput" onClick={handlePasswordClick} showSensitiveInfo={showPassword ? "Hide" : "Show"} />
                        { passwordError && (
                            <ErrorText label={passwordError} testId="testid"/>
                        )}
                    </VStack>
                    <VStack alignItems="start">
                        <Button variant="link" color="fcib.accentRed" border="none">
                            Forgot My Password
                        </Button>
                    </VStack>
                    <VStack alignItems="start">
                        { loginError && (
                            <ErrorBox label={loginError} testId="testID"/>
                        )}
                    </VStack>
                    <VStack alignItems="stretch">
                        <TertiaryButton label="Or Register to Apply Online" disableCondition={false} testId="testID" onClick={handleRegister}/>
                        <PrimaryButton label="Log On" disableCondition={false} testId="testID" onClick={handleLoginClick} />
                    </VStack>
                </VStack>
            </VStack>
        </Stack>
    );
}
