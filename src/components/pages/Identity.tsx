import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Checkbox, Text, VStack } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import Dropdown from "../UI/molecules/Dropdown";
import DualChipSelect from "../UI/molecules/DualChipSelect";
import TertiaryButton from "../UI/atoms/Buttons/TertiaryButton";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes:
// now the add another country button toggles the added fields, may need to add a delete button instead of using this as a toggle
// there is something about certain countries allowing you to add another nationality? not too sure about what that comprises of
//
// cannot get routing to put you to the top of the screen

export default function Identity () {
    // function to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/aboutYou', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/additionalInfo', { replace: false });

    // variable for state of selecting an extra tax country.
    // inputs shown if true, hidden if false
    const [twoTaxCountries, setTwoTaxCountries] = useState(false);
    const handleTwoTaxCountries = () => {
        setTwoTaxCountries(twoTaxCountries => !twoTaxCountries);
        useEffect(() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
          }, []); // trying to get it to go back to the top of the screen on click but it doesnt work, not sure why..
    };

    // normal input functions and states
    const [idNum, setIdNum] = useState('');
    const handleIdNumChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setIdNum(e.target.value)

    const [expDate, setExpDate] = useState('');
    const handleExpDateChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setExpDate(e.target.value)

    const [taxIdNum, setTaxIdNum] = useState('');
    const handleTaxIdNumChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setTaxIdNum(e.target.value)

    const [idNumAdditional, setIdNumAdditional] = useState('');
    const handleIdNumAdditionalChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setIdNumAdditional(e.target.value)

    const [expDateAdditional, setExpDateAdditional] = useState('');
    const handleExpDateAdditionalChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setExpDateAdditional(e.target.value)

        
    // chip select functions and states
    const [politicallyExposedPerson, setPoliticallyExposedPerson] = useState(false);
    const handlePoliticallyExposedPersonChange = () => {
        setPoliticallyExposedPerson(politicallyExposedPerson => !politicallyExposedPerson);
    };

    const [thirdParty, setThirdParty] = useState(false);
    const handleThirdPartyChange = () => {
        setThirdParty(thirdParty => !thirdParty);
    };

    const [taxResBarbados, setTaxResBarbados] = useState(true);
    const handleTexResBarbadosChange = () => {
        setTaxResBarbados(taxResBarbados => !taxResBarbados);
    };

    return (
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                    <HeaderText title="Identity" text="" testId="testid"/>
                    <DualChipSelect
                        label="Are you a politically exposed person?" 
                        valueLeft="Yes" 
                        valueRight="No" 
                        testId="testid" 
                        buttonState={politicallyExposedPerson}
                        onClick={handlePoliticallyExposedPersonChange}
                    />
                    <DualChipSelect
                        label="Is the account being opened and managed on behalf of a 3rd party?" 
                        valueLeft="Yes" 
                        valueRight="No" 
                        testId="testid" 
                        buttonState={thirdParty} 
                        onClick={handleThirdPartyChange}
                    />
                    <HeaderText title="Identity" text="" testId="testid"/>
                    <Text color="gray.600" fontWeight="semibold" textAlign="left">
                        This country requires more than one ID type to be provided. Click here for a list of acceptable IDs
                    </Text>
                    <Stack spacing="4" py="6" direction="column">
                        <Checkbox>This ID does not have an issue date</Checkbox>
                        <Checkbox>This ID does not expire</Checkbox>
                    </Stack>
                    <Dropdown
                        label="My ID was issud in"
                        placeholder="Please Choose"
                        dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                        testId="testid"
                    />
                    <NormalInput
                        label="My ID number is" 
                        placeholder="000000" 
                        type="text" 
                        value={idNum} 
                        onChange={handleIdNumChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <Dropdown
                        label="My ID type is"
                        placeholder="Please Choose"
                        dataArray={["Passport", "Driver's License", "National ID", "Health Card", "Other"]}
                        testId="testid"
                    />
                    <NormalInput
                        label="Expiration Date (DD.MM.YYYY)" 
                        placeholder="" 
                        type="date" 
                        value={expDate} 
                        onChange={handleExpDateChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <VStack alignItems="start"> 
                        { twoTaxCountries && (
                            <>
                                <Stack spacing="4" py="6" direction="column">
                                    <Checkbox>This ID does not have an issue date</Checkbox>
                                    <Checkbox>This ID does not expire</Checkbox>
                                </Stack>
                                <Dropdown
                                    label="My Additional ID was issud in"
                                    placeholder="Please Choose"
                                    dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                                    testId="testid"
                                />
                                <NormalInput
                                    label="My Additional ID number is" 
                                    placeholder="000000" 
                                    type="text" 
                                    value={idNumAdditional} 
                                    onChange={handleIdNumAdditionalChange} 
                                    onBlur={function (){}} 
                                    testId="emailInput"
                                />
                                <Dropdown
                                    label="My Additional ID type is"
                                    placeholder="Please Choose"
                                    dataArray={["Passport", "Driver's License", "National ID", "Health Card", "Other"]}
                                    testId="testid"
                                />
                                <NormalInput
                                    label="Expiration Date (DD.MM.YYYY)" 
                                    placeholder="" 
                                    type="date" 
                                    value={expDateAdditional} 
                                    onChange={handleExpDateAdditionalChange} 
                                    onBlur={function (){}} 
                                    testId="emailInput"
                                />
                            </>
                        )}
                    </VStack>
                    <HeaderText title="Nationality and Tax Reference" text="" testId="testid"/>
                    <Dropdown
                        label="Country of citizenship"
                        placeholder="Please Choose"
                        dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                        testId="testid"
                    />
                    <HeaderText title="Lets Confirm Your Tax Residency" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                    <DualChipSelect
                        label="Are you a tax resident of Barbados?" 
                        valueLeft="Yes" 
                        valueRight="No" 
                        testId="testid" 
                        buttonState={taxResBarbados}
                        onClick={handleTexResBarbadosChange}
                    />
                    <Dropdown
                        label="Country of Tax Residence"
                        placeholder="Please Choose"
                        dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                        testId="testid"
                    />
                    <NormalInput
                        label="My Tax ID Number" 
                        placeholder="000000" 
                        type="text" 
                        value={taxIdNum} 
                        onChange={handleTaxIdNumChange} 
                        onBlur={function (){}} 
                        testId="emailInput"
                    />
                    <TertiaryButton onClick={handleTwoTaxCountries} label="Add Another Country of Tax Residence" disableCondition={false} testId="testID"/>
                    <NavigationButtons routeBack={handleBack} routeSaveExit={handleSaveExit} routeContinue={handleContinue} testId="testid"/>
                </VStack>
            </VStack>
        </Stack>
    );
}
