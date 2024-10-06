import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native';
import { Image } from '../../ui/image';
import {
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@/components/ui/modal"
import {Button, ButtonIcon} from "@/components/ui/button";
import {CloseIcon} from "@/components/ui/icon";

interface TopEventModalProps {
    imgUrl: string
}

export default function TopEventModal({imgUrl}: TopEventModalProps) {

    const [modalVisible, setModalVisible] = React.useState<boolean>(true);

    if (!modalVisible) {
        return null; // 모달이 보이지 않으면 아무것도 렌더링하지 않음
    }

    return (
        <SafeAreaView>
            <Modal isOpen={modalVisible}
                   // avoidKeyboard={true}
                   size={'full'}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader style={styles.modalHeader}>
                        <Button style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <ButtonIcon as={CloseIcon} size={'xs'} ></ButtonIcon>
                        </Button>
                    </ModalHeader>
                    <ModalBody style={styles.modalBody}>
                        <Image source={imgUrl} alt={'Main-event-modal'} style={styles.modalImage}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        flex: 0.01
    },
    modalHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    modalBody: {
        width: "100%",
    },
    modalImage: {
        width: "100%"
    }
})
