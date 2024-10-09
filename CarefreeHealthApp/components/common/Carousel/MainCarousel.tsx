import {mockCarouselImages} from "@/mock/mockCarouselImages.ts";
import {Dimensions, StyleSheet, View} from "react-native";
import {Image} from "@/components/ui/image";
import Carousel, {ICarouselInstance, Pagination} from "react-native-reanimated-carousel";
import * as React from "react";
import {useSharedValue} from "react-native-reanimated";

export default function MainCarousel () {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);
    const width = Dimensions.get('window').width;

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View>
            <Carousel
                pagingEnabled={true}
                ref={ref}
                loop
                width={width}
                height={width / 2}
                data={mockCarouselImages}
                autoPlay={true}
                scrollAnimationDuration={1000}
                onProgressChange={progress}
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
            <Pagination.Basic
                progress={progress}
                data={mockCarouselImages}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        borderRadius: 10,
        color: "#B91C1C"
    },
    carouselItem: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
    }
})