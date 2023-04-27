import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, IconFecebook, Title } from "./styles";
import { Fontisto } from "@expo/vector-icons";

interface Props extends RectButtonProps {
    title?: string;
    iconName: React.ComponentProps<typeof Fontisto>["name"];
}

const ButtonSocialFacebook: React.FC<Props> = ({
    title,
    iconName,
    ...rest
}) => {
    return (
        <Button {...rest}>
            <IconFecebook name={iconName} />
            <Title>{title}</Title>
        </Button>
    );
};

export default ButtonSocialFacebook;
