import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import useCarefreeNavigation from '@/components/navigator/hooks/useCarefreeNavigation'
import * as React from 'react';
import Header from '@/components/common/Header/Header.tsx';
import MainCarousel from "@/components/common/Carousel/MainCarousel.tsx";
import FastStart from "@/components/screens/MainScreen/components/faststart/FastStart.tsx";
import ActiveUsers from "@/components/screens/MainScreen/components/activeusers/ActiveUsers.tsx";
import {useState} from "react";

export default function MainScreen() {

    const { navigation } = useCarefreeNavigation();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView aria-label='메인 화면' style={styles.scrollViewContainer}>
                <Header />
                {/*<TopEventModal imgUrl='https://picsum.photos/600/300'/>*/}
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
    scrollViewContainer: {
        flex: 1
    }
});
