import { Platform } from "react-native"

export const COLORS = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PRIMARY_BLUE: Platform.OS === 'ios' ? '#00B1FF' : '#00A0CA',
    PRIMARY_ORANGE: Platform.OS === 'ios' ? '#FF9A31' : '#F28B24',
    LIGHT_GRAY: '#D3D3D3',
    DARK_GRAY: '#A9A9A9',
    DIM_GRAY: '#696969',
    RED: '#FF0000'
}