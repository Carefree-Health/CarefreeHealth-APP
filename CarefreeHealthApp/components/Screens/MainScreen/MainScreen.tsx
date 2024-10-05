import { StyleSheet, View, Dimensions, Text, Modal, Alert, ScrollView, SafeAreaView } from 'react-native'
import useCarefreeNavigation from '../../Navigator/hooks/useCarefreeNavigation'
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import * as React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Pressable } from '@/components/ui/pressable';
import Header from './Header';
import { Image } from '@/components/ui/image';
import ActionSheet from '@/components/ActionSheet/action-sheet';
import { mockCategoryActionSheet, mockSubCategoryActionSheet, mockThirdCategoryActionSheet } from '@/mock/actionSheets';
import { mockCarouselImages } from '@/mock/carouselImages';


export default function MainScreen() {

    const { navigation } = useCarefreeNavigation();
    const width = Dimensions.get('window').width;

    const [modalVisible, setModalVisible] = React.useState(true);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView aria-label='메인 화면' style={styles.container}>
                <Header />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                    style={styles.event_modal}
                    >
                    <SafeAreaView style={styles.modalSafeView}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>이벤트 모달</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>x</Text>
                                </Pressable>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
                <Carousel
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={mockCarouselImages}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    style={styles.carousel}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                // source={require("../../../assets/images/common/start.png")}
                                source={mockCarouselImages[index]}
                                className="mb-6 h-[240px] w-full rounded-md"
                                alt='main-carousel-image'
                            />
                        </View>
                    )}
                />
                <SafeAreaView style={styles.container}>
                    <Card className="p-5 rounded-lg max-w-[360px] m-3" style={styles.cardContainer} variant='filled'>
                        <View style={styles.getStartView}>
                            <Image
                                source={require("../../../assets/images/common/start.png")}
                                size="md"
                                alt='main-card-image'
                            />
                            <Heading size="xl" >
                                루틴 시작하기
                            </Heading>
                        </View>
                        <View style={styles.cardContainerActionSheet}>
                            <ActionSheet title='대분류를 선택해주세요.' dataList={mockCategoryActionSheet} />
                            <ActionSheet title='중분류를 선택해주세요.' dataList={mockSubCategoryActionSheet} />
                            <ActionSheet title='소분류를 선택해주세요.' dataList={mockThirdCategoryActionSheet} />
                        </View>
                    </Card>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 30
    },
    carousel: {
        flex: 1,
        borderRadius: 30,
        padding: 10
    },
    flex_container: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between"
    },
    event_modal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "flex-start"
    },
    modalSafeView: {
        flex: 1,
        justifyContent: 'flex-start',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // 모달 배경 투명도
    },
    centeredView: {
        flex: 1,
        // justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: 'black',
        // borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 2,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#000000',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        color: "white",
        fontSize: 30,
        textAlign: 'center',
    },
    routin_icon: {
        width: 100,
        height: 100,
        borderRadius: "50px"
    },
    getStartView: {
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