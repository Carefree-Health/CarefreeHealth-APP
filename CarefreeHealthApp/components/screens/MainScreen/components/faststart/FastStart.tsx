import {Heading} from "@/components/ui/heading";
import {Card} from "@/components/ui/card";
import {Pressable} from "@/components/ui/pressable";
import {Image} from "@/components/ui/image";
import {SafeAreaView, StyleSheet, View} from "react-native";
import ActionSheet from "@/components/common/ActionSheet/action-sheet.tsx";
import {
    mockCategoryActionSheet,
    mockSubCategoryActionSheet,
    mockThirdCategoryActionSheet
} from "@/mock/mockActionSheets.ts";
import * as React from "react";

export default function FastStart () {


    return (
        <SafeAreaView style={styles.fastStartContainer}>
            <Heading size='md' style={styles.mainTitle}>
                {'빠른 운동'}
            </Heading>
            <Card className="p-5 rounded-lg max-w-[360px] m-3" style={styles.cardContainer} variant='filled'>
                <Pressable style={styles.getStartButton} onPress={() => console.log('pressed fast start')}>
                    <Image
                        source={require("../../../../../assets/images/common/start.png")}
                        size="md"
                        alt='main-card-image'
                    />
                    <Heading size="xl" >
                        루틴 시작하기
                    </Heading>
                </Pressable>
                <View style={styles.cardContainerActionSheet}>
                    <ActionSheet title='대분류를 선택해주세요.' dataList={mockCategoryActionSheet} />
                    <ActionSheet title='중분류를 선택해주세요.' dataList={mockSubCategoryActionSheet} />
                    <ActionSheet title='소분류를 선택해주세요.' dataList={mockThirdCategoryActionSheet} />
                </View>
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fastStartContainer: {
        flex: 1,
        alignItems: "center"
    },
    mainTitle: {
        flex: 1,
        width: "90%",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 30
    },
    getStartButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    cardContainerActionSheet: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        gap: 5
    }
})