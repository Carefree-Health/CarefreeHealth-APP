import {StyleSheet, View} from "react-native";
import {Image} from "@/components/ui/image";
import {Textarea, TextareaInput} from "@/components/ui/textarea";
import {Modal} from "@/components/ui/modal";

export default function LoginScreen() {

    const loginDesc = "3000만 운동러들을 위한 플랫폼, Carefree\n" +
        "\n" +
        "로그인 방법을 선택해주세요."

    return (
        <View style={styles.container}>
            <Modal size="full" >
                <Image size={"full"} source={require("../../../assets/images/carefree-health-logo-v1.png")} alt={'carefree-health-logo-v1'} />
                <Textarea
                    size="md"
                    isReadOnly={true}
                    isInvalid={true}
                    isDisabled={false}
                    className="w-64"
                >
                    <TextareaInput placeholder="" value={loginDesc}/>
                </Textarea>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    // logoImage: {
    //     flex: 1
    // },
});