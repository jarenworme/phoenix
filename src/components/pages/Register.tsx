import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack, Text } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import SensitiveInput from "../UI/molecules/SensitiveInput";
import ErrorText from "../UI/atoms/ErrorText";
import TertiaryButton from "../UI/atoms/Buttons/TertiaryButton";
import PrimaryButton from "../UI/atoms/Buttons/PrimaryButton";

// notes:

export default function Register () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleStartContinue = () => navigate('/startContinue', { replace: false });
    const handleVerify = () => navigate('/verify', { replace: false });

    // normal input functions and states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleEmailChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)

    const [phoneNum, setPhoneNum] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');
    const handlePhoneNumChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPhoneNum(e.target.value)

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handlePasswordChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const handleConfirmPasswordChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setConfirmPassword(e.target.value)

    // error checking functions
    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePhoneNumber = () => {
        const phoneNumRegex = /^((\+\d{1,4}[-\s]?)?\d{2,4}){1}[-\s]?(\d{3}[-\s]?)?\d{4}$/;
        if (!phoneNumRegex.test(phoneNum)) {
            setPhoneNumError('Please enter a valid phone number');
        } else {
            setPhoneNumError('')
        }
    };

    //8 characters long with min 1 lowercase, uppercase, digit, special
    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be eight (8) characters long, contain at least one (1) uppercase, one (1) lowercase, one (1) digit and one (1) special character. e.g. Adm!n01');
        } else {
            setPasswordError('')
        }
    };

    const validatePasswords = () => { // maybe give this a better name
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handlePasswordClick = () => setShowPassword(!showPassword);

    const handleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword);

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                <HeaderText title="Register to Apply Online" text="We've developed this channel to serve you better!" testId="testid"/>
                </VStack>
                <VStack alignItems="stretch">
                    <VStack alignItems="start">
                        <NormalInput 
                            label="Email" 
                            placeholder="Email" 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            onBlur={validateEmail} 
                            testId="emailInput"
                        />
                        { emailError && (
                            <ErrorText label={emailError} testId="testid"/>
                        )}
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput 
                            label="Phone Number" 
                            placeholder="xxx-xxx-xxxx" 
                            type="tel" 
                            value={phoneNum} 
                            onChange={handlePhoneNumChange} 
                            onBlur={validatePhoneNumber} 
                            testId="testid"
                        />
                        { phoneNumError && (
                            <ErrorText label={phoneNumError} testId="testid"/>
                        )}
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <SensitiveInput 
                            label="Password" 
                            placeholder="Your Password" 
                            type={showPassword ? "text" : "password"} 
                            value={password} 
                            onChange={handlePasswordChange} 
                            onBlur={validatePassword} 
                            testId="passwordInput" 
                            onClick={handlePasswordClick} 
                            showSensitiveInfo={showPassword ? "Hide" : "Show"}
                        />
                        { passwordError && (
                            <ErrorText label={passwordError} testId="testid"/>
                        )}
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <SensitiveInput label="Confirm Password" placeholder="Confirm Password" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={validatePasswords} testId="passwordConfirmationInput" onClick={handleConfirmPasswordClick} showSensitiveInfo={showConfirmPassword ? "Hide" : "Show"} />
                        { confirmPasswordError && (
                            <ErrorText label={confirmPasswordError} testId="testid"/>
                        )}
                    </VStack>
                    <VStack pt="4" w="full" alignItems="stretch">
                        <TertiaryButton label="Or Start or Continue Your Application" disableCondition={false} testId="testID" onClick={handleStartContinue}/>
                        <PrimaryButton 
                            label="Send Confirmation Code" 
                            disableCondition={(emailError.length > 0 || phoneNumError.length > 0 || passwordError.length > 0 || confirmPasswordError.length > 0) 
                                || (email.length == 0 || phoneNum.length == 0 || password.length == 0 || confirmPassword.length == 0)} 
                            testId="testID" 
                            onClick={handleVerify}
                        />
                    </VStack>
                </VStack>
            </VStack>
        </Stack>
    );
}
