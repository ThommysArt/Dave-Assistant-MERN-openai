import { useState } from "react";
import { Box, Card, Button, Flex, IconButton, Text, TextField, Heading } from "@radix-ui/themes";


export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const [user, setUser] = useState(null);

    return (
        <>
            <Box style={{padding:'10% 20%'}}>
                <Card style={{padding:'5%'}}>
                    
                    <Flex direction="column" gap="3">
                        <Flex gap='2' justify='center' direction='column'>
                            <Flex justify='center'><Heading>Login</Heading></Flex>
                            <Flex style={{width: '100%', height:'8px', justifyContent: 'center'}}>
                                <div style={{width: '6%', height: '100%', backgroundColor: "#3E63DD", borderRadius: "10px", justifySelf:'center'}} ></div>
                            </Flex>
                        </Flex>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Email
                            </Text>
                            <TextField.Input
                            placeholder="Enter your email"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Password
                            </Text>
                            <TextField.Input
                            type="password"
                            placeholder="Enter your password"
                            />
                        </label>
                    </Flex>
                    <Flex gap="3" mt="4" justify="end">
                        <Button>Login</Button>
                        <IconButton variant="soft">
                            <img src='icons/icons8-google-20 (1).png'></img>
                        </IconButton>
                        <IconButton variant="soft">
                            <img src='icons/icons8-apple-20.png'></img>
                        </IconButton>
                        <IconButton variant="soft">
                            <img src='icons/icons8-outlook-20 (1).png'></img>
                        </IconButton>
                    </Flex>
                </Card>
            </Box>
        </>
    )
}