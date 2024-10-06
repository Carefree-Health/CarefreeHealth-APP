import {FlatList, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {Heading} from "@/components/ui/heading";
import * as React from "react";
import {Card} from "@/components/ui/card";
import {Button, ButtonGroup, ButtonIcon, ButtonText} from "@/components/ui/button";
import {mockActiveUsers} from "@/mock/mockActiveUsers.ts";
import ActiveUserButton from "@/components/main/activeusers/ActiveUserButton.tsx";
import {ArrowRightIcon} from "@/components/ui/icon";


export default function ActiveUsers() {

    const onTotalUserButtonClickHandler = () => {
        console.log('전체 보기 버튼 클릭!')
    };

    const flatListHeader = () => (
        <View style={styles.flatListHeader}>
            <Heading size='md' style={styles.mainTitle}>
                {'실시간 운동러들!'}
            </Heading>
            <Button onPress={onTotalUserButtonClickHandler}
                    size={'xs'}
                    variant={'link'}
            >
                <ButtonText variant={'link'}>전체 보기</ButtonText>
                <ButtonIcon as={ArrowRightIcon}/>
            </Button>
        </View>
    )

    return (
        <SafeAreaView style={styles.activeUsersContainer}>
            <Card style={styles.flatListContainer} variant={'outline'}>
                <FlatList
                    ListHeaderComponent={flatListHeader}
                    data={mockActiveUsers}
                    renderItem={({item}) => <ActiveUserButton key={item.username} username={item.username} profileImage={item.profileImage} />}
                    keyExtractor={(item) => item.username}
                    numColumns={2}
                    contentContainerStyle={{ gap: 5 }}
                    columnWrapperStyle={{ gap: 10 }}
                    scrollEnabled={false}
                >
                </FlatList>
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    activeUsersContainer: {
        flex: 1,
        alignItems: "center",
    },
    mainTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10
    },
    flatListHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    flatListContainer: {
        width: "90%",
    }
});