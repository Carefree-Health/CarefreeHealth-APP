import {SafeAreaView, StyleSheet, View} from "react-native";
import {Image} from "@/components/ui/image";
import {Textarea, TextareaInput} from "@/components/ui/textarea";
import {Modal} from "@/components/ui/modal";
import {Button, ButtonGroup, ButtonIcon, ButtonText} from "@/components/ui/button";
import {Icon} from "@/components/ui/icon";

export default function LoginScreen() {

    const loginDesc = "3000만 운동러들을 위한 플랫폼, Carefree\n" +
        "\n" +
        "로그인 방법을 선택해주세요."

    return (
        <SafeAreaView style={styles.container}>
            <Image size={'2xl'} source={require("../../../assets/images/carefree-health-logo-v1.png")} alt={'carefree-health-logo-v1'} />
            <Textarea
                isReadOnly={true}
                isInvalid={true}
                isDisabled={false}
                style={styles.textArea}
            >
                <TextareaInput placeholder="" value={loginDesc}/>
            </Textarea>
            <ButtonGroup style={styles.buttonGroup}>
                <Button>
                    {/*<Icon as={}></Icon>*/}
                    {/*</ButtonIcon>*/}
                    <ButtonText>카카오톡으로 로그인</ButtonText>
                </Button>
                <Button>
                    {/*<Icon as={}></Icon>*/}
                    {/*</ButtonIcon>*/}
                    <ButtonText>네이버로 로그인</ButtonText>
                </Button>
            </ButtonGroup>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logoImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    textArea: {
        flex: 1,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
