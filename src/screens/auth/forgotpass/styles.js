import { StyleSheet } from "react-native";
import { AppTheme } from "../../../config/AppTheme";
import { scale, verticalScale } from "../../../utils/scale";

export const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        marginTop: verticalScale(20),
        fontSize: AppTheme.FontSize.Medium,
        color: AppTheme.Colors.Grey,
        marginBottom: verticalScale(20)
    },
    textLine:{
        width: scale(160),
        borderBottomWidth: 1,
        borderColor: AppTheme.Colors.Grey,
    },
    viewOr:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: verticalScale(40)
    },
    textOR:{
        fontSize: AppTheme.FontSize.Medium,
        color: AppTheme.Colors.Grey,
        fontWeight : "700",
        marginHorizontal: scale(20),
        top: verticalScale(10)
    },
    textBack:{
        textAlign: 'center',
        marginTop: verticalScale(20),
        fontSize: AppTheme.FontSize.Medium,
        color: AppTheme.Colors.Grey,
        fontWeight : "700",
        marginBottom: verticalScale(40)
    },
    textTitle:{
        textAlign: 'center',
        marginTop: verticalScale(30),
        fontSize: AppTheme.FontSize.Large,
        color: AppTheme.Colors.Dark,
        fontWeight : "700",
        marginBottom: verticalScale(40)
    },
    textRegister:{
        color: AppTheme.Colors.Black,
        opacity: 0.8
    },

    containerRegister:{
        backgroundColor: AppTheme.Colors.White,
    },
    body:{
        flex: 1,
        backgroundColor: AppTheme.Colors.SecondBackround,
        paddingHorizontal: scale(16),
    },
    container:{
        flex: 1,
        backgroundColor: AppTheme.Colors.White,
    }
})