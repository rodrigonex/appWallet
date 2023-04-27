import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 19px;
    border-radius: ${RFValue(5)}px;
    margin-left: ${RFValue(10)}px;
    box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const IconFecebook = styled(Fontisto)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
