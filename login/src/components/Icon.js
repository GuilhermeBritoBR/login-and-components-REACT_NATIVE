import { Image } from "react-native";
import { styles } from "../styles/Stylesheet";
export default function Icon(){
    const icon = {uri: ('https://cdn.icon-icons.com/icons2/1694/PNG/512/brbrazilflag_111698.png')}

    return(
        <Image
        source={icon}
        style={styles.img}
        />
    )
}