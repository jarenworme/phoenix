import React, { useState } from "react";
import { Box, Stack, VStack, HStack, Heading, Text, Button } from "@chakra-ui/react";
import NormalInput from "../UI/molecules/NormalInput";
import SensitiveInput from "../UI/molecules/SensitiveInput";

export default function Register () {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleEmailChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)

    const [area, setArea] = useState('');
    const [areaError, setAreaError] = useState('');
    const handleAreaChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setArea(e.target.value)

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const handlePhoneChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPhone(e.target.value)

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handlePasswordChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const handleConfirmPasswordChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setConfirmPassword(e.target.value)

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const validateArea = () => {
        const areaCodeRegex = /^(\+\d{1,4}[-\s]?)?\d{2,4}$/;
        if (!areaCodeRegex.test(area)) {
            setAreaError('please enter a valid area code');
        } else {
            setAreaError('')
        }
    };

    const validatePhone = () => {
        const phoneNumberRegex = /^(\d{3}[-\s]?)?\d{4}$/;
        if (!phoneNumberRegex.test(phone)) {
            setPhoneError('Please enter a valid phone number'); //maybe give a better error message like suggesting the format
        } else {
            setPhoneError('')
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
                    <Heading as="h1" color="fcib.accentRed" textAlign="left" fontWeight="bold" fontSize="3xl">
                        Register to Apply Online
                    </Heading>
                    <Text color="gray.600" fontWeight="semibold" textAlign="left">
                        We've developed this channel to serve you better!
                    </Text>
                </VStack>
                <VStack alignItems="stretch">
                    <VStack alignItems="start">
                        <NormalInput label="Email" placeholder="Email" type="email" value={email} onChange={handleEmailChange} onBlur={validateEmail} testId="emailInput" />
                        { emailError && (
                            <Text color="red" fontSize="sm" data-testid="emailErrorTestInput">
                                {emailError}
                            </Text>
                        )}
                    </VStack>
                    <HStack w="full" alignItems="start">
                        <VStack alignItems="start" flex="1">
                            <NormalInput label="Area Code" placeholder="+1" type="tel" value={area} onChange={handleAreaChange} onBlur={validateArea} testId="areaCodeInput" />
                            { areaError && (
                                <Text color="red" fontSize="sm" data-testid="areaErrorTestInput">
                                    {areaError}
                                </Text>
                            )}
                        </VStack>
                        <VStack alignItems="start" flex="2">
                            <NormalInput label="Phone Number" placeholder="Phone" type="tel" value={phone} onChange={handlePhoneChange} onBlur={validatePhone} testId="phoneNumberInput" />
                            { phoneError && (
                                <Text color="red" fontSize="sm" data-testid="phoneErrorTestInput">
                                    {phoneError}
                                </Text>
                            )}
                        </VStack>
                    </HStack>
                    <VStack alignItems="start" spacing="1.5">
                        <SensitiveInput label="Password" placeholder="Your Password" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} onBlur={validatePassword} testId="passwordInput" onClick={handlePasswordClick} showSensitiveInfo={showPassword ? "Hide" : "Show"} />
                        { passwordError && (
                            <Text color="red" fontSize="sm" data-testid="passwordErrorTestInput">
                                {passwordError}
                            </Text>
                        )}
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <SensitiveInput label="Confirm Password" placeholder="Confirm Password" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={validatePassword} testId="passwordConfirmationInput" onClick={handleConfirmPasswordClick} showSensitiveInfo={showConfirmPassword ? "Hide" : "Show"} />
                        { confirmPasswordError && (
                            <Text color="red" fontSize="sm" data-testid="passwordConfirmationTestInput">
                                {confirmPasswordError}
                            </Text>
                        )}
                    </VStack>
                    <VStack p="4" w="full" alignItems="stretch">
                        <Button 
                            w="full" 
                            variant="solid" 
                            bg="fcib.accentRed" 
                            color="white" 
                            minH="3.5rem" 
                            data-testid="submitFormButton" 
                            isDisabled={emailError.length > 0 || areaError.length > 0 || phoneError.length > 0 || passwordError.length > 0 || confirmPasswordError.length > 0} 
                            _disabled={{ opacity: '0.4', cursor: 'not-allowed', bgColor: 'bgDisabled', color: 'textDisabled'}}>
                                Send Confirmation Code
                        </Button>
                        <HStack alignItems="center" justifyContent="center" w="full" data-testid="existingClientLogin">
                            <Text>Already have an account?</Text>
                            <Button variant="link" color="black" border="none" textDecoration="underline">
                                Log in
                            </Button>
                        </HStack>
                    </VStack>
                </VStack>
            </VStack>
            <Box bgColor="#efefef" p="6" w={["90vw", "50vw", "50vw"]} maxH={["35vh", "40vh", "30vh"]} alignItems="start" data-testid="registerInfo">
                <Heading fontWeight="medium" fontSize="2xl" textAlign="left">
                    Why Register?
                </Heading>
                <Text textAlign="left" fontSize="md" lineHeight="1">
                    Registration is simple, quick and convenient.
                    <br />
                    <br />
                    On returning to the site, to either continue an application or start an application for a new product, your
                    personal details will be pre-populated, saving you even more time!
                </Text>
            </Box>
        </Stack>
    );
}