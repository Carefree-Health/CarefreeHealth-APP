import {Toast, ToastDescription, ToastTitle, useToast} from "@/components/ui/toast";
import React, {useState} from "react";
import {Button, ButtonText} from "@/components/ui/button";
import KakaoOauthResponseDto from "@/apis/login/oauth/kakao/kakao-oauth-response.dto.ts";
import {login, me} from "@react-native-kakao/user";
import KakaoUserResponseDto from "@/apis/login/oauth/kakao/kakao-user-response.dto.ts";

type TypeProps = "error" | "warning" | "success" | "info" | "muted" | undefined;

interface LoginStateProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ToastInfoProps {
    type: TypeProps,
    title: string,
    desc: string
}

export default function CarefreeKakaoLoginToastButton({isLoggedIn, setIsLoggedIn}: LoginStateProps) {

    const kakaoLoginResponse = (responseBody: KakaoOauthResponseDto) => {
        responseBody ? setIsLoggedIn(true) : setIsLoggedIn(false);
        console.log(
            "accessToken: " + responseBody.accessToken,
            "refreshToken: " + responseBody.refreshToken,
            "tokenType: " + responseBody.tokenType,
            "idToken: " + responseBody.idToken,
            "scope: " + responseBody.scopes.join(', ')
        )
    }

    const getKakaoUserResponse = (responseBody: KakaoUserResponseDto) => {
        console.log(
            "id: " + responseBody.id,
            "email: " + responseBody.email,
            "nickname: " + responseBody.nickname,
            "profileImage: " + responseBody.profileImageUrl
        )
    }

    const getKakaoUserInfo = () => {
        me().then(getKakaoUserResponse)
    }

    const onLoginButtonClickHandler = () => {
        if (isLoggedIn) {
            const alreadyLoggedInProps: ToastInfoProps = {
                type: "warning",
                title: "이미 로그인 상태입니다.",
                desc: "메인 페이지로 이동합니다."
            }
            showNewToast(alreadyLoggedInProps);
        }

        login().then(kakaoLoginResponse).then(getKakaoUserInfo).catch((error) => {
            const alreadyLoggedInProps: ToastInfoProps = {
                type: "error",
                title: "로그인 오류",
                desc: "일시적인 오류로 인해 로그인에 실패하였습니다. 잠시 후 다시 시도해주세요."
            }
            showNewToast(alreadyLoggedInProps);
            console.log('[kakao] login error occured ::: ' + error.toString())
        });
    };

    const toast = useToast();
    const [toastId, setToastId] = useState<string>("0");

    function showNewToast ({type, title, desc}: ToastInfoProps) {
        const newId = Math.random().toString();
        setToastId(newId);
        toast.show({
            id: newId,
            placement: 'top',
            duration: 3000,
            render: ({ id }) => {
                const uniqueToastId = "toast-" + id;
                return (
                    <Toast nativeID={uniqueToastId} action={type} variant="solid" >
                        <ToastTitle>{title}</ToastTitle>
                        <ToastDescription>
                            {desc}
                        </ToastDescription>
                    </Toast>
                );
            },
        });
    }

    return (
        <Button onPress={onLoginButtonClickHandler}>
            <ButtonText>로그인</ButtonText>
        </Button>
    );
}