import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

import Card from '../../components/UI/Card'


const JobDetailScreen = ({ navigation, route }) => {
    const { jobId } = route.params
    const job = useSelector(state => state.jobs.list.find(j => j.id === jobId))

    return (
        <SafeAreaView style={styles.screen}>
            <Text>{job.title}</Text>
            <Card>
                <Text>{job.shortDescription}</Text>
                <Text>{job.longDescription}</Text>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    }
})

export default JobDetailScreen