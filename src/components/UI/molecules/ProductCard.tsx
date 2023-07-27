import { Text, Button, Flex, Card, CardBody, Heading } from "@chakra-ui/react";
import { Logo } from "../../../other/Logo";

interface ProductCardProps{
    title: string,
    price: string,
    description: string,
    cardState: boolean,
    onClick: () => void,
    testId: string
}


export default function ProductCard({ title, price, description, cardState, onClick, testId}:ProductCardProps){
    return(
        <>               
            <Card 
                bgColor={cardState ? 'fcib.blueLighter90' : 'fcib.white'}
                borderColor={cardState ? 'fcib.blueDarker40' : 'fcib.greyLighter40 '}
            >
                <CardBody>
                    <Flex justifyContent="space-between" alignItems="center" m="0">
                        <Heading size='xs'>{title}</Heading>
                        <Flex>
                            <Text pr="1">
                                {price}
                            </Text>
                            <Button 
                                onClick={onClick} 
                                h="fit-content" 
                                bg="invisible" 
                                px="0" 
                                _active={{border: "none"}} 
                                _hover={{bgColor: "transparent", border: "none"}}>
                                <Logo/>
                            </Button>
                        </Flex>
                    </Flex>
                    <Text textAlign="left" my="1">
                        {description}
                    </Text>
                </CardBody>
            </Card>
        </>
    );
}
