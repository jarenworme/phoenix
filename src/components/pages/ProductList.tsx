import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, VStack, Flex, Heading, } from "@chakra-ui/react";
import ErrorBox from "../UI/atoms/ErrorBox";
import ProductCard from "../UI/molecules/ProductCard";
import TertiaryButton from "../UI/atoms/Buttons/TertiaryButton";
import PrimaryButton from "../UI/atoms/Buttons/PrimaryButton";

// notes:

export default function ProductList () {
    // functions to control routes of bottom buttons
    const navigate = useNavigate();
    const handleBack = () => navigate('/selectProducts', { replace: false });
    const handleSaveExit = () => navigate('/startContinue', { replace: false });
    const handleContinue = () => navigate('/aboutYou', { replace: false });

    // error checking state variable for tracking how many cards are selected
    const [totalSelected, setTotalSelected] = useState(0);

    // card functions and states 
    const [cardState1, setCardState1] = useState(false);
    const handleCardState1Change = () => {
        if (!cardState1) {
            setCardState1(cardState1 => !cardState1);
            setTotalSelected(totalSelected => totalSelected + 1);
        } else {
            setCardState1(cardState1 => !cardState1);
            setTotalSelected(totalSelected => totalSelected - 1);
        }
    };

    const [cardState2, setCardState2] = useState(false);
    const handleCardState2Change = () => {
        if (!cardState2) {
            setCardState2(cardState2 => !cardState2);
            setTotalSelected(totalSelected => totalSelected + 1);
        } else {
            setCardState2(cardState2 => !cardState2);
            setTotalSelected(totalSelected => totalSelected - 1);
        }
    };

    const [cardState3, setCardState3] = useState(false);
    const handleCardState3Change = () => {
        if (!cardState3) {
            setCardState3(cardState3 => !cardState3);
            setTotalSelected(totalSelected => totalSelected + 1);
        } else {
            setCardState3(cardState3 => !cardState3);
            setTotalSelected(totalSelected => totalSelected - 1);
        }
    };

    const [cardState4, setCardState4] = useState(false);
    const handleCardState4Change = () => {
        if (!cardState4) {
            setCardState4(cardState4 => !cardState4);
            setTotalSelected(totalSelected => totalSelected + 1);
        } else {
            setCardState4(cardState4 => !cardState4);
            setTotalSelected(totalSelected => totalSelected - 1);
        }
    };

    return(
        <Stack direction={["column", "column", "column", "row"]} px='6' pb='6' spacing='8'>
            <VStack alignItems="stretch" w="full" spacing="1.5">
                <VStack w="full" alignItems="stretch">
                    <VStack alignItems="start">
                        { totalSelected > 2 && (
                            <ErrorBox label="You cannot select more than 2 items" testId="testID"></ErrorBox>
                        )}
                    </VStack>
                    <VStack alignItems="stretch" py="3" data-testid='registerPageHeading'>
                        <Flex justifyContent="space-between">
                        <Heading as="h5" textAlign="left" fontWeight="bold" fontSize="3xl">
                            Name
                        </Heading>
                        <Heading as="h5" textAlign="left" fontWeight="bold" fontSize="3xl">
                            Minimum Balance
                        </Heading>
                        </Flex>
                    </VStack>
                    <hr></hr>
                    <ProductCard 
                        testId="testID" 
                        onClick={handleCardState1Change} 
                        title="Product Name 1" 
                        price="$xxx.xx" 
                        description="description for product 1 - long to test wrap: hggggggggggggg gggggggggggg ssssssssssssssssss ggggggggggggggg ssssssssssss sssssssssssssssss sssssssssssss sssssssssss " 
                        cardState={cardState1}
                    />
                    <ProductCard 
                        testId="testID" 
                        onClick={handleCardState2Change} 
                        title="Product Name 2" 
                        price="$xxx.xx" 
                        description="description for card 2 " 
                        cardState={cardState2}
                    />
                    <ProductCard 
                        testId="testID" 
                        onClick={handleCardState3Change} 
                        title="Product Name 3" 
                        price="$xxx.xx" 
                        description="description for card 3" 
                        cardState={cardState3}
                    />
                    <ProductCard 
                        testId="testID" 
                        onClick={handleCardState4Change} 
                        title="Product Name 4" 
                        price="$xxx.xx" 
                        description="description for card 4" 
                        cardState={cardState4}
                    />
                </VStack>
                <VStack w="full" alignItems="stretch">
                    <TertiaryButton label="< Back" disableCondition={(totalSelected > 2)} onClick={handleBack} testId="testID"/>
                    <TertiaryButton label="Save & Exit" disableCondition={(totalSelected > 2)} onClick={handleSaveExit} testId="testID"/>
                    <PrimaryButton label="Continue" onClick={handleContinue} disableCondition={(totalSelected > 2)} testId="testID"/>
                </VStack>
            </VStack>
        </Stack>
    );
}
