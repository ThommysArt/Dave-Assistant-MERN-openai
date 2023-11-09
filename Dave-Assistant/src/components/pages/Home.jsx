import { Box, Flex, Button, IconButton, Section, Separator, Heading, Badge } from '@radix-ui/themes';
import { ListBulletIcon, Pencil2Icon, RowsIcon} from '@radix-ui/react-icons'


export const Home = () => {
    return (
        <>
            <Flex height='100%'>
                <Flex gap='5' justify='start' direction='column' style={{width:'25%'}}>
                    <Section height='5' width='100%' p='1'>
                        <Flex justify='between'>
                            <Heading style={{padding:'1%'}}>Dave</Heading>
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
                </Flex>
                <Box style={{width:'75%'}}>

                </Box>
            </Flex>
        </>
    )
} 