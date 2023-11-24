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


export default function SignupPage () {
    const [user, setUser] = useState({name:'', email: '', password:''});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    const sign_up = async () => {
        try {
            const response = await fetch('https://localhost:8080/api/v1/auth/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                })
            })

            const data = await response.json();
            setUser({name: data.name, email: data.email, password: data.password});
            setSignedUp(true);

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

    const handleNameInputChange = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <Box style={{padding:'10% 20%'}}>
                <Card style={{padding:'5%', backgroundColor:'#f3fcff'}}>
                    
                    <Flex direction="column" gap="3">
                        <Flex gap='2' justify='center' direction='column'>
                            <Flex justify='center'><Heading>Sign Up</Heading></Flex>
                            <Flex style={{width: '100%', height:'8px', justifyContent: 'center'}}>
                                <div style={{width: '6%', height: '100%', backgroundColor: "#75C7F0", borderRadius: "10px", justifySelf:'center'}} ></div>
                            </Flex>
                        </Flex>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Name
                            </Text>
                            <TextField.Input
                                variant="soft"
                                placeholder="Enter your email"
                                onChange={handleNameInputChange}
                            />
                        </label>
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
                        <Button onClick={sign_up}>Sign Up</Button>
                    </Flex>
                    <Box>
                    <Box py='3'>
                        <Callout.Root>
                            <Callout.Icon>
                                <InfoCircledIcon />
                            </Callout.Icon>
                            <Callout.Text>
                                Already have an account? <Link href="/login">Login</Link>
                            </Callout.Text>
                        </Callout.Root>
                    </Box>
                    </Box>
                </Card>
            </Box>
        </>
    )

}