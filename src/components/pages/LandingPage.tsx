import { VStack, Heading, Text, Button, HStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// notes:
// all change password buttons take you to the testing page

export default function LandingPage(){
    const navigate = useNavigate();
    const handleSubmit = () => navigate('/register', { replace: false });
    const testSelectProducts = () => navigate('/testPage', { replace: false });

    return (
        <VStack alignItems='center'
            maxW='container.md'
            justifyContent='space-around'
            h="90vh"
            gap='4'
        >
            <VStack alignItems='stretch' justifyContent='center' spacing={4} p='6' data-testid='frontLandingPageHeading'>
                <Heading as='h1'
                    fontWeight='400'
                    fontSize={['40px', '40px', '48px']}
                    textAlign='left'
                >
                    Your{' '}
                    <Heading as='span'
                        textStyle='h1'
                        fontSize={['40px', '40px', '48px']}
                        color='fcib.accentRed'
                    >
                        quickest
                    </Heading>
                    <b> and easiest </b>
                    account opening process
                </Heading>
                <Text pt='1rem'textAlign='left'>
                    Open your new account from the comfort of your home.
                </Text>
            </VStack>
            <VStack alignItems='start' w='full' p='6' data-testid='frontLandingPageCampaign'>
                <HStack data-testid='campaign-text'>
                    <Spacer></Spacer>
                    <Text fontSize='sm' textAlign='left' mr='0'>
                        Best experienced on mobile
                    </Text>
                </HStack>
                <HStack data-testid='campaign-text'>
                    <Spacer></Spacer>
                    <Text fontSize='sm' textAlign='left' mr='0'>
                        No fees involved
                    </Text>
                </HStack>
            </VStack>
            <VStack p='6' w='full' alignItems='stretch'>
                <Button w='full' variant='solid' bg='fcib.accentRed' onClick={handleSubmit} color='white' minH='3.5rem'  data-testid='getStartedButton'>
                    Get Started
                </Button>
                <HStack alignItems='center' justifyContent='center' w='full' data-testid='faqs'>
                    <Text>Got questions</Text>
                    <Button variant='link' color='black' border='none' textDecorationLine='underline'>
                        Check our FAQs
                    </Button>
                </HStack>
                <Button onClick={testSelectProducts}>testing</Button>
            </VStack>
        </VStack>
    );
}
