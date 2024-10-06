import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import useCarefreeNavigation from '@/components/navigator/hooks/useCarefreeNavigation'
import * as React from 'react';
import Header from '@/components/common/Header/Header.tsx';
import TopEventModal from '@/components/common/TopEventModal/top-event-modal';
import MainCarousel from "@/components/common/Carousel/MainCarousel.tsx";
import FastStart from "@/components/main/faststart/FastStart.tsx";
import ActiveUsers from "@/components/main/activeusers/ActiveUsers.tsx";


export default function MainScreen() {

    const { navigation } = useCarefreeNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView aria-label='메인 화면'>
                <Header />
                <TopEventModal imgUrl='https://picsum.photos/600/300'/>
                <MainCarousel />
                <FastStart />
                <ActiveUsers />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
});