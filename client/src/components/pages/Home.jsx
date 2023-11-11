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
    ListBulletIcon, 
    Pencil2Icon, 
    RowsIcon, 
    ChatBubbleIcon,
    FilePlusIcon,
    PaperPlaneIcon,
} from '@radix-ui/react-icons'
import ChatResponse from '../custom/ChatResponse';


export const Home = () => {
    return (
        <Box style={{backgroundColor:'#f7fffc'}}>
            <Flex height='100%'>
                <Flex gap='5' justify='start' direction='column' style={{width:'25%'}}>
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
                    <Badge>Recent</Badge>
                    <Button>New Chat</Button>
                    <Flex direction='column' gap='1' p='2' justify='start'>
                        <Button variant='ghost'>
                            <ChatBubbleIcon></ChatBubbleIcon><Text>This was an old chat</Text>
                        </Button>
                    </Flex>
                </Flex>
                <Box p='4' m='3' style={{width:'75%', height:'90vh', backgroundColor:'#eefff9', borderRadius:'10px'}}>
                    <Flex direction='column' gap='3'>
                        <Flex gap='2'>
                            <Avatar fallback='A' variant='solid'/>
                            <Text style={{padding:'1%'}}>This is an old coversation</Text>
                        </Flex>
                        <Section style={{height:'80%', backgroundColor:'#dff7ef', borderRadius:'10px' }}>
                            <ChatResponse />
                        </Section>
                        <Flex gap='1' width='100%'>
                            <IconButton><FilePlusIcon /></IconButton>
                            <TextField.Input
                                placeholder='Enter your prompt'
                                variant="soft"
                                />
                            <IconButton><PaperPlaneIcon /></IconButton>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
} 