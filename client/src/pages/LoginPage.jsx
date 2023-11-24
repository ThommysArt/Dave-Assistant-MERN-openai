import { useEffect, useState } from "react";
import { 
    Box, 
    Card, 
    Button, 
    Flex, 
    IconButton, 
    Text, 
    TextField, 
    Heading,
    Link,
    Callout
} from "@radix-ui/themes";

import { InfoCircledIcon } from "@radix-ui/react-icons";


export default function LoginPage () {
    const [user, setUser] = useState({name:'', email: '', password:''});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedIn, setSignedIn] = useState(false);

    
    const sign_in = async () => {
        try {
            const response = await fetch('https://localhost:8080/api/v1/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            const data = await response.json();
            setUser({name: data.name, email: data.email, password: data.password});

        } catch (error) {
            alert('Error: ' + error.message);
        }
    }


    const handleEmailInputChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value)
    }
    

    return (
        <>
            <Box style={{padding:'10% 20%'}}>
                <Card style={{padding:'5%', backgroundColor:'#f3fcff'}}>
                    
                    <Flex direction="column" gap="3">
                        <Flex gap='2' justify='center' direction='column'>
                            <Flex justify='center'><Heading>Login</Heading></Flex>
                            <Flex style={{width: '100%', height:'8px', justifyContent: 'center'}}>
                                <div style={{width: '6%', height: '100%', backgroundColor: "#75C7F0", borderRadius: "10px", justifySelf:'center'}} ></div>
                            </Flex>
                        </Flex>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Email
                            </Text>
                            <TextField.Input
                                variant="soft"
                                placeholder="Enter your email"
                                onChange={handleEmailInputChange}
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Password
                            </Text>
                            <TextField.Input
                                variant="soft"
                                type="password"
                                placeholder="Enter your password"
                                onChange={handlePasswordInputChange}
                            />
                        </label>
                    </Flex>
                    <Flex gap="3" mt="4" justify="end">
                        <Button onClick={sign_in}>Login</Button>
                    </Flex>
                    <Box py='3'>
                        <Callout.Root>
                            <Callout.Icon>
                                <InfoCircledIcon />
                            </Callout.Icon>
                            <Callout.Text>
                                Don't have an account? <Link href="/signup">Sign Up</Link>
                            </Callout.Text>
                        </Callout.Root>
                    </Box>
                </Card>
            </Box>
        </>
    )
}