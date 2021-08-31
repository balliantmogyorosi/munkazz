import React, { useCallback, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import JobBadge from '../../components/JobBadge'
import { JOB_DETAIL_SCREEN } from '../../constants/ScreenNames'
import { fetchJobs } from '../../store/actions/jobs'


const JobsScreen = ({ navigation }) => {
    const [isRefreshing, setIsRefreshing] = useState(false)

    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs.list)

    const jobListRefreshHandler = useCallback(() => {
        dispatch(fetchJobs())
    }, [dispatch, fetchJobs])

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                onRefresh={jobListRefreshHandler}
                refreshing={isRefreshing}
                data={jobs}
                keyExtractor={item => item.id}
                renderItem={itemData => {
                    return (
                        <JobBadge
                            job={itemData.item}
                            onPress={() => navigation.navigate(JOB_DETAIL_SCREEN, { jobId: itemData.item.id })}
                            style={{ marginBottom: 4, }}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    }
})

export default JobsScreen