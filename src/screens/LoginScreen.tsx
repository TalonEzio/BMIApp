import { StyleSheet, Switch, Text, TextInput, View } from "react-native"

const LoginScreen = () =>
{
    return (
        <View>
            <View>
                <Text>Đăng nhập</Text>
            </View>

            <View>
                <Text>Tài khoản</Text>
                <TextInput placeholder="Nhập tài khoản"></TextInput>
            </View>

            <View>
                <Text>Mật khẩu</Text>
                <TextInput placeholder="Nhập mật khẩu"></TextInput>
            </View>

            <View>
                <Switch>Ghi nhớ</Switch>
            </View>
        </View>
        
    )
}
export { LoginScreen }

const styles = StyleSheet.create({
    
}
)