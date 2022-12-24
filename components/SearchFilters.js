import react, { useState, useEffect } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import React from 'react'
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
    const router = useRouter()
    const [filters, setfilters] = useState(filterData)
    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        const values = getFilterValues(filterValues)
        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })
        router.push({ pathname: path, query })
    }
    return (
        <Flex bg='gray.100' justifyContent='center' flexWrap='wrap' p='4'>
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2'>
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters