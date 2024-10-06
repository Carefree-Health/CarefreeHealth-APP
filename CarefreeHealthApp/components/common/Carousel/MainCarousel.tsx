import {mockCarouselImages} from "@/mock/mockCarouselImages.ts";
import {Dimensions, StyleSheet, View} from "react-native";
import {Image} from "@/components/ui/image";
import Carousel from "react-native-reanimated-carousel";
import * as React from "react";

export default function MainCarousel () {
    const width = Dimensions.get('window').width;

    return (
        <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={mockCarouselImages}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => console.log('current index:', index)}
            style={styles.carousel}
            renderItem={({ index }) => (
                <View style={styles.carouselItem}>
                    <Image source={mockCarouselImages[index]}
                           className="mb-6 h-[240px] w-full rounded-md"
                           alt='main-carousel-image'
                    />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        borderRadius: 25,
        padding: 10
    },
    carouselItem: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
    }
})