import React from "react";
import { SafeAreaView } from "react-native";

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
} from "./styles";

// Import Components
import ButtonSocialGoogle from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import ButtonSocialFacebook from "../../components/ButtonSocialFecebook/ButtonSocialFecebook";
import Input from "../../components/Input_old/Input";

export default function Login() {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {"\n"} a Wallet App</Title>
                    <Description>Logar com</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialFacebook
                            iconName="facebook"
                            title="Fecebook"
                        />
                    </ViewButton>
                </ContentHeader>
                <ContentBody>
                    <Input
                        name="email"
                        iconName="mail-outline"
                        placeholder="Seu e-email"
                    />
                    <Input
                        name="password"
                        iconName="lock-open-outline"
                        placeholder="Digite sua senha"
                    />
                </ContentBody>
                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
}
