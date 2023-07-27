import { useNavigate } from "react-router-dom";
import { Stack, VStack, Heading } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import FileUpload from "../UI/atoms/FileUpload";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes:

export default function UploadDocuments () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/productDetails', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/confirmInformation', { replace: false });
    
    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                    <HeaderText title="Upload Your Documents" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem nostrum sunt at et doloribus sint repellendus veritatis, eius harum!" testId="testid"/>
                </VStack>
                <VStack alignItems="stretch" w="full">
                    <Heading as="h4">Passport</Heading>
                    <FileUpload label="Upload your document here" testId="testid"/>
                    <Heading as="h4">Proof of Address</Heading>
                    <FileUpload label="Upload your document here" testId="testid"/>
                </VStack>
                <VStack alignItems="stretch">
                    <NavigationButtons routeBack={handleBack} routeSaveExit={handleSaveExit} routeContinue={handleContinue} testId="testid"/>
                </VStack>
            </VStack>
        </Stack>
    );
}
