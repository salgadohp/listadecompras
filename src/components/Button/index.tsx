import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps &{
    title: string
}

export function Button({title, ...rest}: Props){
    return (
        <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.9}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

