import React from 'react'

import { Card, Text } from './UI'


const JobBadge = ({ job, onPress, style }) => {
    return (
        <Card style={style} onPress={onPress}>
            <Text>{job.title}</Text>
            <Text>{job.shortDescription}</Text>
        </Card>
    )
}

export default JobBadge