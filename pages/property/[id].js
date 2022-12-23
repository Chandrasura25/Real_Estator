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
            {photos && <ImageScrollbar data={photos}/> }
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