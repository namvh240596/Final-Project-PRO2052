import { Dimensions, Platform, NativeModules, StyleSheet } from 'react-native';
import { scale } from '../utils/scale';

const StatusBarManager = NativeModules;

const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const textFontFamily = 'Poppins-';
const AppTheme = {
    Fonts: {
        Regular: `${textFontFamily}Regular`,
        Medium: `${textFontFamily}Medium`,
        SemiBold: `${textFontFamily}SemiBold`,
        Bold: `${textFontFamily}Bold`,
    },
    Colors: {
        Blue: '#40BFFF',
        Red: '#FB7181',
        Yellow: '#FFC833',
        Green: '#53D1B6',
        Puple: '#5C61F4',
        Dark: '#223263',
        Grey: '#9098B1',
        Light: '#EBF0FF',
        White: '#FFFFFF',
    },
    FontSize: {
        Small: scale(12),
        SmallX: scale(14),
        Medium: scale(16),
        Large: scale(24),
    },
    Dimensions: {
        windowHeight,
        windowWidth,
        statusBarHeight
    }
};

const TextStyles = StyleSheet.create({
    headingText1: {
        fontSize: scale(32),
        fontFamily: AppTheme.Fonts.Bold,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    headingText2: {
        fontSize: scale(24),
        fontFamily: AppTheme.Fonts.Bold,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    headingText3: {
        fontSize: scale(20),
        fontFamily: AppTheme.Fonts.Bold,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    bodyTextLargeBold: {
        fontSize: scale(16),
        fontFamily: AppTheme.Fonts.Bold,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    bodyTextLargeLight: {
        fontSize: scale(16),
        fontFamily: AppTheme.Fonts.Medium,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    bodyTextMediumBold: {
        fontSize: scale(14),
        fontFamily: AppTheme.Fonts.Bold,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    bodyTextMediumLight: {
        fontSize: scale(14),
        fontFamily: AppTheme.Fonts.Medium,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Dark,
    },
    linkText: {
        fontSize: scale(14),
        fontFamily: AppTheme.Fonts.Bold,
        letterSpacing: 0.5,
        color: AppTheme.Colors.Blue,
    }
});


export { TextStyles, AppTheme }