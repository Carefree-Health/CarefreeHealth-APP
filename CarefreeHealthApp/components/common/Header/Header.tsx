import {StyleSheet, View} from 'react-native'
import { Image } from '@/components/ui/image';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import {
    Button,
    ButtonIcon,
    ButtonGroup, ButtonText
} from "@/components/ui/button"
import { BellIcon, SearchIcon, SettingsIcon } from '@/components/ui/icon';
import {useState} from "react";
import CarefreeKakaoLoginToastButton from "@/components/common/Toast/CarefreeKakaoLoginToastButton.tsx";
import LoginScreen from "@/components/screens/LoginScreen/LoginScreen.tsx";
import useCarefreeNavigation from "@/components/navigator/hooks/useCarefreeNavigation.ts";

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoginButtonClicked, setIsLoginButtonClicked] = useState<boolean>(false);

    const {navigation} = useCarefreeNavigation();

    const onLoginButtonClickHandler = () => {
        navigation.navigate("Login")
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                  size="xs"
                  source={require('../../../assets/images/carefree-health-logo-v1.png')}
                  alt="image"
                />
                <Input
                    variant="rounded"
                    size="sm"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    style={styles.input}
                >
                  <InputField type="text" placeholder='검색어를 입력하세요.' />
                  <InputSlot onPress={() => console.log('검색을 실행합니다.')}>
                    <InputIcon as={SearchIcon} color='black'></InputIcon>
                  </InputSlot>
                </Input>
                {isLoggedIn ?
                    <ButtonGroup space='xs' style={styles.button_group} flexDirection='row' isAttached={true}>
                    <Button style={styles.iconButton} size='xs'>
                      <ButtonIcon as={BellIcon} color='black' size='sm'/>
                    </Button>
                    <Button style={styles.iconButton} size='xs'>
                      <ButtonIcon as={SettingsIcon} color='black' size='sm' />
                    </Button>
                    </ButtonGroup>
                    :
                    <View>
                        <Button size="xs" style={styles.button} onPress={onLoginButtonClickHandler}>
                            <ButtonText>간편 로그인</ButtonText>
                        </Button>
                        {/*<CarefreeKakaoLoginToastButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />*/}
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    headerContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white",
        gap: 10,
        padding: 5
    },
    input: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 5,
    },
    button_group: {
      flex: 0.5
    },
    button: {
        backgroundColor: "#B91C1C"
    },
    iconButton: {
      flex: 0.2,
      color: "black",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
})
