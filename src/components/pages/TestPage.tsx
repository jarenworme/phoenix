import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack, } from "@chakra-ui/react";
import HeaderText from "../UI/molecules/HeaderText";
import PrimaryButton from "../UI/atoms/Buttons/PrimaryButton";
import SecondaryButton from "../UI/atoms/Buttons/SecondaryButton";
import TertiaryButton from "../UI/atoms/Buttons/TertiaryButton";
import GhostButton from "../UI/atoms/Buttons/GhostButton";
import Dropdown from "../UI/molecules/Dropdown";
import DualChipSelect from "../UI/molecules/DualChipSelect";
import ProductCard from "../UI/molecules/ProductCard";
import NavigationButtons from "../UI/molecules/BottomNavigation";

// notes:
// continue button here takes you to select products

export default function UploadDocuments () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/', { replace: false });
    const handleSaveExit = () => navigate('/', { replace: false });
    const handleContinue = () => navigate('/selectProducts', { replace: false });

    const [chipState, setChipState] = useState(true);
    const handleChipStateChange = () => {
        setChipState(chipState => !chipState);
    };

    const [cardState1, setCardState1] = useState(false);
    const handleCardState1Change = () => {
        setCardState1(cardState1 => !cardState1);
    };

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack alignItems="stretch">
                    <h4>showcase of UI components</h4>
                    <HeaderText title="Header Title" text="subtext for a header title" testId="testID"/>
                    <PrimaryButton label="primary button" testId="testid" disableCondition={false} onClick={function () {}}/>
                    <SecondaryButton label="secondary button" disableCondition={false} testId="testid" onClick={function () {}}/>
                    <TertiaryButton label="tertiary button" disableCondition={false} testId="testid" onClick={function () {}}/>
                    <GhostButton label="ghost button" disableCondition={false} testId="testid" onClick={function () {}}/>
                    <Dropdown label="Dropdown" placeholder="please select" dataArray={["option1", "option2", "option3"]} testId="testID"/>
                    <DualChipSelect
                        label="Chip select" 
                        valueLeft="option1" 
                        valueRight="option2" 
                        testId="testid" 
                        buttonState={chipState} 
                        onClick={handleChipStateChange}
                    />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rem beatae dolorem quae aut quisquam autem, libero sapiente exercitationem numquam.
                    <ProductCard 
                        testId="testID" 
                        onClick={handleCardState1Change} 
                        title="Card: See product list for error checking" 
                        price="$xxx.xx" 
                        description="description :  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rem beatae dolorem quae aut quisquam autem, libero sapiente exercitationem numquam." 
                        cardState={cardState1}
                    />
                </VStack>
                <VStack alignItems="stretch">
                    <NavigationButtons routeBack={handleBack} routeSaveExit={handleSaveExit} routeContinue={handleContinue} testId="testid"/>
                </VStack>
            </VStack>
        </Stack>
    );
}
