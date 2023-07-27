import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import Dropdown from "../UI/molecules/Dropdown";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes: 

export default function AdditionalInfo () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/identity', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/productDetails', { replace: false });

    // normal input functions and states
    const [jobTitle, setJobTitle] = useState('');
    const handleJobTitleChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setJobTitle(e.target.value)

    const [employerName, setEmployerName] = useState('');
    const handleEmployerNameChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setEmployerName(e.target.value)

    const [workAddress, setWorkAddress] = useState('');
    const handleWorkAddressChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setWorkAddress(e.target.value)

    const [workAddress2, setWorkAddress2] = useState('');
    const handleWorkAddress2Change = (e: {target: { value: React.SetStateAction<string>; }; }) => setWorkAddress2(e.target.value)

    const [cityStateParish, setCityStateParish] = useState('');
    const handleCityStateParishChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setCityStateParish(e.target.value)

    const [postalCode, setPostalCode] = useState('');
    const handlePostalCodeChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setPostalCode(e.target.value)

    const [workPhone, setWorkPhone] = useState('');
    const handleWorkPhoneChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setWorkPhone(e.target.value)

    const [workEmail, setWorkEmail] = useState('');
    const handleWorkEmailChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setWorkEmail(e.target.value)

    const [workStartDate, setWorkStartDate] = useState('');
    const handleWorkStartDateChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setWorkStartDate(e.target.value)

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch"  py="3" data-testid='registerPageHeading'>
                <HeaderText title="Additional Info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                </VStack>
                <VStack alignItems="stretch">
                    <VStack alignItems="start">
                        <Dropdown
                            label="Employment Status"
                            placeholder="Please Choose"
                            dataArray={["employed", "unemployed", "retired", "millitary"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <Dropdown
                            label="Source of Income"
                            placeholder="Please Choose"
                            dataArray={["source1", "source2", "source3"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <Dropdown
                            label="Occupation"
                            placeholder="Please Choose"
                            dataArray={["option1", "option2"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Job Title" 
                            placeholder="" 
                            type="text" 
                            value={jobTitle} 
                            onChange={handleJobTitleChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Name of Employer" 
                            placeholder="" 
                            type="text" 
                            value={employerName} 
                            onChange={handleEmployerNameChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Work Address" 
                            placeholder="" 
                            type="text" 
                            value={workAddress} 
                            onChange={handleWorkAddressChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="" 
                            placeholder="" 
                            type="text" 
                            value={workAddress2} 
                            onChange={handleWorkAddress2Change} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Work City/State/Parish" 
                            placeholder="" 
                            type="text" 
                            value={cityStateParish} 
                            onChange={handleCityStateParishChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Work postal code" 
                            placeholder="Address 1" 
                            type="text" 
                            value={postalCode} 
                            onChange={handlePostalCodeChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <Dropdown
                            label="Work Country"
                            placeholder="Please Choose"
                            dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Work phone number" 
                            placeholder="" 
                            type="text" 
                            value={workPhone} 
                            onChange={handleWorkPhoneChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Work Email" 
                            placeholder="City 1" 
                            type="text" 
                            value={workEmail} 
                            onChange={handleWorkEmailChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Current work start date (DD.MM.YYYY)" 
                            placeholder="" 
                            type="date" 
                            value={workStartDate} 
                            onChange={handleWorkStartDateChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <Dropdown
                            label="Source of Future Funding"
                            placeholder="Please Choose"
                            dataArray={["Employment", "Spouse", "Other"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="stretch">
                        <NavigationButtons routeBack={handleBack} routeSaveExit={handleSaveExit} routeContinue={handleContinue} testId="testid"/>
                    </VStack>
                </VStack>
            </VStack>
        </Stack>
    );
}
