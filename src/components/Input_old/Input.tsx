import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from "react";
import { useTheme } from "styled-components/native";
import { useField } from "@unform/core";
import { Container, IconContainer, InputText } from "./styles";
import { TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputRef {
    focus(): void;
}

interface InputValueReference {
    value: string;
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    containerStyle?: { [key: string]: string | number };
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { iconName, name, value, placeholder, containerStyle, ...rest },
    ref
) => {
    const theme = useTheme();
    const inputElementRef = useRef<any>(null);
    const [hasError, setHasError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    /*
    const {
        registerField,
        fieldName,
        defaultValue = "",
        error,
    } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    useEffect(() => {
        setHasError(!!error);
    }, [error]);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
        setHasError(false);
    }, []);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value);
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputElementRef,
            path: "value",
            setValue(_, value) {
                (inputValueRef.current.value = value),
                    inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = "";
                inputElementRef.current.clear();
            },
        });
    }, []);
*/
    return (
        <Container style={containerStyle}>
            <IconContainer
                isFilled={isFilled}
                hasError={hasError}
                isFocused={isFocused}
            >
                <Ionicons
                    name={iconName}
                    size={25}
                    color={
                        isFocused || isFilled || hasError
                            ? theme.COLORS.BLUE1
                            : theme.COLORS.GRAY
                    }
                />
            </IconContainer>
            <InputText
                isFilled={isFilled}
                hasError={hasError}
                isFocused={isFocused}
                placeholder={placeholder}
            />
        </Container>
    );
};

export default Input;
/*
                ref={inputElementRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isFilled={isFilled}
                hasError={hasError}
                isFocused={isFocused}
                defaultValue={defaultValue}
                placeholderTextColor={theme.COLORS.GRAY1}
                onChangeText={(value) => {
                    inputValueRef.current.value = value;
                }}
                {...rest}
                */
