import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack, Text } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import NormalInput from "../UI/molecules/NormalInput";
import Dropdown from "../UI/molecules/Dropdown";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes:

export default function ProductDetails () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/additionalInfo', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/uploadDocuments', { replace: false });

    // normal input functions and states
    const [initDeposit, setInitDeposit] = useState('');
    const handleInitDepositChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setInitDeposit(e.target.value)

    const [numDeposits, setNumDeposits] = useState('');
    const handleNumDepositsChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setNumDeposits(e.target.value)

    const [valDeposits, setValDeposits] = useState('');
    const handleValDepositsChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setValDeposits(e.target.value)

    const [numPaymentsWithdrawals, setNumPaymentsWithdrawals] = useState('');
    const handleNumPaymentsWithdrawalsChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setNumPaymentsWithdrawals(e.target.value)

    const [valPaymentsWithdrawals, setValPaymentsWithdrawals] = useState('');
    const handleValPaymentsWithdrawalsChange = (e: {target: { value: React.SetStateAction<string>; }; }) => setValPaymentsWithdrawals(e.target.value)

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                    <HeaderText title="Product Details" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                    <HeaderText title="Selected Products" text="" testId="testid"/>
                </VStack>
                <VStack alignItems="stretch">
                    <VStack alignItems="start">
                        <NormalInput
                            label="Initial deposit amount" 
                            placeholder="" 
                            type="text" 
                            value={initDeposit} 
                            onChange={handleInitDepositChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <Text color="gray.600" fontWeight="semibold" textAlign="left">
                            Currency: BARBADOS DOLLAR
                        </Text>
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <Dropdown
                            label="How did you hear about us?"
                            placeholder="Please Choose"
                            dataArray={["Social Media", "Advertisement", "Friend, Family or Colleague", "Other"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Estimated number of deposits into the account per month" 
                            placeholder="" 
                            type="text" 
                            value={numDeposits} 
                            onChange={handleNumDepositsChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Estimated value of deposits into the account per month" 
                            placeholder="" 
                            type="text" 
                            value={valDeposits} 
                            onChange={handleValDepositsChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Estimated number of payments/withdrawals from the account per month" 
                            placeholder="" 
                            type="text" 
                            value={numPaymentsWithdrawals} 
                            onChange={handleNumPaymentsWithdrawalsChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start">
                        <NormalInput
                            label="Estimated value of payments/withdrawals from the account per month" 
                            placeholder="" 
                            type="text" 
                            value={valPaymentsWithdrawals} 
                            onChange={handleValPaymentsWithdrawalsChange} 
                            onBlur={function (){}} 
                            testId="emailInput"
                        />
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <Dropdown
                            label="Purpose of the account"
                            placeholder="Please Choose"
                            dataArray={["personal", "investment fund", "business", "Other"]}
                            testId="testid"
                        />
                    </VStack>
                    <VStack alignItems="start" spacing="1.5">
                        <Dropdown
                            label="How would you fund opening this account?"
                            placeholder="Please Choose"
                            dataArray={["option1", "option2"]}
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
