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
} from "@radix-ui/themes";
import { auth } from "../../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
 } from "firebase/auth";

export default function AuthsPage () {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpError, setSignUpError] = useState(null);

    const sign_up = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            setUser(userCredential.user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const sign_in = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const google_auth = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            setUser(result.user);
            console.log(result.user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const handleEmailInputChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value)
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            //redirect to home page
        } else {
            //nothing or error message
        }
        });
    }, [])

    return (
        <>
            <Box style={{padding:'10% 20%'}}>
                <Card style={{padding:'5%', backgroundColor:'#f7fffc'}}>
                    
                    <Flex direction="column" gap="3">
                        <Flex gap='2' justify='center' direction='column'>
                            <Flex justify='center'><Heading>Authentication</Heading></Flex>
                            <Flex style={{width: '100%', height:'8px', justifyContent: 'center'}}>
                                <div style={{width: '6%', height: '100%', backgroundColor: "#58D5BA", borderRadius: "10px", justifySelf:'center'}} ></div>
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
                        <Button onClick={sign_up}>Sign Up</Button>
                    </Flex>
                    <Box>
                        <Flex direction='column' gap='2'>
                            <Text size='4'>Or Continue with</Text>
                            <Flex gap='3'>
                                <Button variant="soft" onClick={google_auth}>
                                    <img src='icons/icons8-google-20 (1).png'></img>
                                    <Text>Google</Text>
                                </Button>
                                <Button variant="soft">
                                    <img src='icons/icons8-apple-20.png'></img>
                                    <Text>Apple</Text>
                                </Button>
                                <Button variant="soft">
                                    <img src='icons/icons8-facebook-20.png'></img>
                                    <Text>Facebook</Text>
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                </Card>
            </Box>
        </>
    )
}