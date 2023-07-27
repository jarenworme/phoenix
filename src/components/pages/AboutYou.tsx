import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack} from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import Dropdown from "../UI/molecules/Dropdown";
import DualChipSelect from "../UI/molecules/DualChipSelect";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes:

export default function AboutYou () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/productList', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/identity', { replace: false });

    // normal input functions and states
    const [firstName, setFirstName] = useState('');
    const handleFirstNameChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value)

    const [lastName, setLastName] = useState('');
    const handleLastNameChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value)

    const [middleName, setMiddleName] = useState('');
    const handleMiddleNameChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setMiddleName(e.target.value)

    const [DOB, setDOB] = useState('');
    const handleDOBChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setDOB(e.target.value)

    const [mothersName, setMothersName] = useState('');
    const handleMothersNameChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setMothersName(e.target.value)

    const [address1, setAddress1] = useState('');
    const handleAddress1Change = (e: {target: { value: React.SetStateAction<string>; }; }) => setAddress1(e.target.value)
    const [Address2, setAddress2] = useState('');
    const handleAddress2Change = (e: {target: { value: React.SetStateAction<string>; }; }) => setAddress2(e.target.value)

    const [cityStateParish, setCityStateParish] = useState('');
    const handleCityStateParishChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setCityStateParish(e.target.value)

    const [postalCode, setPostalCode] = useState('');
    const handlePostalCodeChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPostalCode(e.target.value)

    const [moveDate, setMoveDate] = useState('');
    const handleMoveDateChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setMoveDate(e.target.value)

    const [telephone, setTelephone] = useState('');
    const handleTelephoneChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setTelephone(e.target.value)

    const [mobile, setMobile] = useState('');
    const handleMobileChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setMobile(e.target.value)

    const [email, setEmail] = useState('');
    const handleEmailChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)

    const [currentBankName,setCurrentBankName] = useState('');
    const handleCurrentBankNameChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setCurrentBankName(e.target.value)

    const [currentBankAddress, setCurrentBankAddress] = useState('');
    const handleCurrentBankAddressChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setCurrentBankAddress(e.target.value)
    
    // chip select functions and states
    const [gender, setGender] = useState(true);
    const handleGenderChange = () => {
        setGender(gender => !gender);
    };

    const [diffAddress, setDiffAddress] = useState(true);
    const handleDiffAddressChange = () => {
        setDiffAddress(diffAddress => !diffAddress);
    };

    return (
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                    <HeaderText title="About You" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                    <NormalInput
                        label="First Name" 
                        placeholder="" 
                        type="text" 
                        value={firstName} 
                        onChange={handleFirstNameChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Last Name" 
                        placeholder="" 
                        type="text" 
                        value={lastName} 
                        onChange={handleLastNameChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Middle Name" 
                        placeholder="" 
                        type="text" 
                        value={middleName} 
                        onChange={handleMiddleNameChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <Dropdown
                        label="Title"
                        placeholder="Please Choose"
                        dataArray={["Mr.", "Mrs.", "Ms.", "Miss", "Dr."]}
                        testId="testid"
                    />
                    <NormalInput
                        label="Date Of Birth (DD.MM.YYYY)" 
                        placeholder="Email" 
                        type="date" 
                        value={DOB} 
                        onChange={handleDOBChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <Dropdown
                        label="Country of birth"
                        placeholder="Please Choose"
                        dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                        testId="testid"
                    />
                    <DualChipSelect
                        label="Gender" 
                        valueLeft="Male" 
                        valueRight="Female" 
                        testId="testid" 
                        buttonState={gender} 
                        onClick={handleGenderChange}
                    />
                    <Dropdown
                        label="Marital Status"
                        placeholder="Please Choose"
                        dataArray={["Single", "Divorced", "Widowed"]}
                        testId="testid"
                    />
                    <NormalInput
                        label="Mother's Maiden Name" 
                        placeholder="" 
                        type="text" 
                        value={mothersName} 
                        onChange={handleMothersNameChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <HeaderText title="Contact Information" text="" testId="testid"/>
                    <NormalInput
                        label="Permanent Address" 
                        placeholder="Address 1" 
                        type="text" 
                        value={address1} 
                        onChange={handleAddress1Change} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="" 
                        placeholder="" 
                        type="text" 
                        value={Address2} 
                        onChange={handleAddress2Change} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Permanent City/State/Parish" 
                        placeholder="City 1" 
                        type="text" 
                        value={cityStateParish} 
                        onChange={handleCityStateParishChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Permanent Postal Code" 
                        placeholder="" 
                        type="text" 
                        value={postalCode} 
                        onChange={handlePostalCodeChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <Dropdown
                        label="Permanent Country"
                        placeholder="Please Choose"
                        dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                        testId="testid"
                    />
                    <NormalInput
                        label="Date you moved into your permanent address (DD.MM.YYYY)" 
                        placeholder="" 
                        type="date" 
                        value={moveDate} 
                        onChange={handleMoveDateChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <Dropdown
                        label="Proof of Address"
                        placeholder="Please Choose"
                        dataArray={["utilty bill", "bank statement", "letter from landlord"]}
                        testId="testid"
                    />
                    <DualChipSelect
                        label="Is your mailing address different thatn your permament address" 
                        valueLeft="Yes" 
                        valueRight="No" 
                        testId="testid" 
                        buttonState={diffAddress} 
                        onClick={handleDiffAddressChange}
                    />
                    <NormalInput
                        label="Telephone number" 
                        placeholder="" 
                        type="tel" 
                        value={telephone} 
                        onChange={handleTelephoneChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Mobile number" 
                        placeholder="" 
                        type="tel" 
                        value={mobile} 
                        onChange={handleMobileChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="E-mail address" 
                        placeholder="" 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Name of the Current Bank" 
                        placeholder="" 
                        type="text" 
                        value={currentBankName} 
                        onChange={handleCurrentBankNameChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NormalInput
                        label="Address of the Current Bank" 
                        placeholder="" 
                        type="text" 
                        value={currentBankAddress} 
                        onChange={handleCurrentBankAddressChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <NavigationButtons routeBack={handleBack} routeSaveExit={handleSaveExit} routeContinue={handleContinue} testId="testid"/>
                </VStack>
            </VStack>
        </Stack>
    );
}
