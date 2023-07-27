import { Button, HStack, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function NavBar(){
    const navigate = useNavigate();
    const handleChangePassword = () => navigate('/testPage', { replace: false });

    return (
        <>
            <HStack w="full">
                <Flex
                    px='6'
                    minH='10vh'
                    alignItems='center'
                    w='full'
                    borderBottom='1px'
                    borderStyle='solid'
                    borderColor='gray.200'
                    justifyContent="space-between"
                >
                    <Image alt='FCIB Logo' data-testid='fcib-logo'/>
                    
                    <Button onClick={handleChangePassword}>Change Password</Button>
                    
                </Flex>
            </HStack>
        </>
    );
}
