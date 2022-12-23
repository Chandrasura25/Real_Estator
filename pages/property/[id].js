import React from 'react'
import { Box, Text, Spacer, Flex, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go'
import millify from 'millify';
// import defaultImage from '../assets/images/house.jpg'
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, baths, title, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => {
    return (
        <Box maxWidth={'1200px'} margin='auto' p='4'>
            {photos && <ImageScrollbar data={photos} />}
            <Box w='full' p='6'>
                <Flex paddingTop={2} alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight={3} color='green.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='lg' >AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between' p='1' w='250px' color='blue.400'>{rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill /> </Flex> 
                <Box marginTop='2'>
                    <Text fontSize='lg' marginBottom={2} fontWeight='bold'>{title}</Text>
                    <Text lineHeight={2} color='gray.600'>{description}</Text>
                </Box>
                <Flex flexWrap='wrap' textTransform={'uppercase'} justifyContent='center'>
                    <Flex justifyContent={'space-between'} w='400px' borderBottom={'1px'} borderColor='gray.100' p='3'>
                        <Text>type</Text>
                        <Text fontWeight='bold'>{type}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default PropertyDetails
export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
    return {
        props: {
            propertyDetails: data
        }
    }
}