import {Button, ButtonText} from "@/components/ui/button";
import UseCarefreeNavigation from "@/components/navigator/hooks/useCarefreeNavigation.ts";
import {Image} from "@/components/ui/image";
import { StyleSheet } from "react-native";

interface ActiveUserButtonProps {
    profileImage: string,
    username: string
}

export default function ActiveUserButton ({profileImage, username}: ActiveUserButtonProps) {

    const {navigation} = UseCarefreeNavigation()

    const onActiveUserButtonPressHandler = () => {
        // TODO: 각 유저 별 정보 페이지로 이동할 것.
        navigation.navigate('MyPage')
    };

    return (
        <Button onPress={onActiveUserButtonPressHandler} style={styles.buttonContainer}>
            <Image source={profileImage} alt={'Active-User-Image'} size={'xs'} borderRadius={25}/>
            <ButtonText>{username}</ButtonText>
        </Button>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "grey",
        borderRadius: 25
    }
})
