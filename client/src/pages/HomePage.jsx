import { 
    Box, 
    Text, 
    Flex, 
    Button, 
    IconButton, 
    Section, 
    Separator, 
    Heading, 
    Badge,
    Avatar,
    TextField,
 } from '@radix-ui/themes';
import { 
    Pencil2Icon, 
    RowsIcon, 
    ChatBubbleIcon,
    FilePlusIcon,
    PaperPlaneIcon,
} from '@radix-ui/react-icons';

import { ImgCard, Loader } from '../components';

import { useState, useEffect } from 'react';


export default function HomePage () {
    const [isMobile, setIsMobile] = useState(false);

    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    })
    const [ generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const generateImage = async() => {
        if (form.prompt) {
            try {
                setGeneratingImg(true);
                const response = await fetch('https://localhost:9080/api/v1/dalle',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: form.prompt })
                })

                const data = await response.json();
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`})
            } catch (error) {
                alert(error)
            } finally {
                setGeneratingImg(false);
            } 
        } else {
            alert('Please enter a prompt')
        }
    }

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box style={{backgroundColor:'#f3fcff'}}>
            <Flex direction='column' gap='5'>
                <Section height='5' width='100%' p='1'>
                    <Flex justify='between'>
                        <Flex>
                            <Heading style={{padding:'1%'}}>Dave</Heading>
                            <Box p='1'><Badge variant='outline'>Assistant</Badge></Box>
                        </Flex>
                        <Flex  gap='3' p='2' justify='between'>
                            <IconButton variant='ghost'>
                                <RowsIcon width='20' height='20'/>
                            </IconButton>
                            <IconButton variant='ghost'>
                                <Pencil2Icon width='20' height='20'/>
                            </IconButton>
                        </Flex>
                    </Flex>
                </Section>
                <Separator size='4' />

                <Flex>
                    {isMobile ? (
                        <></>
                    ) : (
                        <Flex gap='5' justify='start' direction='column' style={{width:'25%'}}>
                        
                            <Badge>Recent</Badge>
                            <Button>New Chat</Button>
                            <Flex direction='column' gap='1' p='2' justify='start'>
                                <Button variant='ghost'>
                                    <ChatBubbleIcon></ChatBubbleIcon><Text>This was an old chat</Text>
                                </Button>
                            </Flex>
                        </Flex>
                    )}
                    
                    <Box p='4' m='3' style={{backgroundColor:'#e8faff', borderRadius:'10px'}}>
                        <Flex direction='column' gap='3'>
                            <Flex gap='2'>
                                <Avatar fallback='A' variant='solid'/>
                                <Text style={{padding:'1%'}}>This is an old coversation</Text>
                            </Flex>
                            <Box style={{height:'60vh', backgroundColor:'#C2F3FF', borderRadius:'10px' }}>
                                <ImgCard />
                            </Box>
                            <Flex gap='1'>
                                <IconButton><FilePlusIcon /></IconButton>
                                <TextField.Input
                                    placeholder='Enter your prompt...'
                                    variant="soft"
                                    style={{width: '60vw'}}
                                />
                                <IconButton><PaperPlaneIcon /></IconButton>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            
        </Box>
    )
} 