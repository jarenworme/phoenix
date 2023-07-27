import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack, Text } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import DualChipSelect from "../UI/molecules/DualChipSelect";
import Dropdown from "../UI/molecules/Dropdown";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes:

export default function SelectYourProducts () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/startContinue', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/productList', { replace: false });

    const [selected, setSelected] = useState(true);
    const handleChip = () => {
        setSelected(selected => !selected);
    }

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                <HeaderText title="Select Your Products" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                    <DualChipSelect
                        label="What type of account would you like to open?" 
                        valueLeft="Personal" 
                        valueRight="Business"
                        testId="testid" 
                        buttonState={selected} 
                        onClick={handleChip}
                    />
                    <Dropdown
                        label="Which country would you like to open the account in?"
                        placeholder="Please Choose"
                        dataArray={["Barbados", "Trinidad", "Jamaica", "Cayman", "St. Lucia", "St. Vincent"]}
                        testId="testid"
                    />
                    <Dropdown
                        label="Which branch location is most convenient for you to bank with?"
                        placeholder="Please Choose"
                        dataArray={["Warrens", "Rendesvous", "Wildey"]}
                        testId="testid"
                    />
                    <Text color="gray.600" fontWeight="semibold" textAlign="left">
                        Please select one or more products from the list on the next page:
                    </Text>
                </VStack>
                <NavigationButtons routeBack={handleBack} routeSaveExit={handleSaveExit} routeContinue={handleContinue} testId="testid"/>
            </VStack>
        </Stack>
    );
}
