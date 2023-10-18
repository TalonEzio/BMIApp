import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"



const BMIScreen = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [BMI, setBMI] = useState(0)
    const [status, setStatus] = useState('')
    const event = {
        caculateBMI: () => {
            if (!weight) {
                Alert.alert("error", "Cannot convert to number, please try again")
                return
            }
            if (!height) {
                Alert.alert("error", "Cannot convert to number, please try again")
                return
            }
            const newBMI = weight / (height * height)
            let newStatus = ''
            setBMI(x => newBMI)
            if (newBMI <= 18.4) {
                newStatus = 'Underweight'
            }
            else if (newBMI < 25) {
                newStatus = 'Normal'
            }
            else if (newBMI < 40) {
                newStatus = 'Overweight'
            }
            else {
                newStatus = 'Obese'
            }
            setStatus(x => newStatus)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>BMI application</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentText}>Weight</Text>
                <TextInput
                    keyboardType="numeric"
                    style={styles.contentInput}
                    onChangeText={(newText) => {
                        setWeight(Number.parseFloat(newText))
                    }}
                ></TextInput>

                <Text style={styles.contentText}>Height (m)</Text>
                <TextInput
                    style={styles.contentInput}
                    keyboardType="numeric"
                    onChangeText={(newText) => {
                        setHeight(Number.parseFloat(newText))
                    }}
                ></TextInput>

                <View style={styles.contentResult}>
                    <Text>Your BMI: </Text>
                    <Text>{BMI.toPrecision(3)}</Text>
                </View>

                <View style={styles.contentResult}>
                    <Text>Your status: </Text>
                    <Text>{status}</Text>
                </View>
                <TouchableOpacity style={styles.contentButton} onPress={event.caculateBMI}>
                    <Text style={styles.contentButtonText}>Caculate</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:
    {
        padding: 10
    },
    header:
    {

    },
    headerTitle:
    {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30
    },
    content:
    {

    },
    contentWeight:
    {

    },
    contentHeight:

    {

    },
    contentText:
    {
        marginVertical: 10
    },
    contentInput:
    {
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        fontSize: 16

    },
    contentResult:
    {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    contentButton:
    {
        marginTop: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor: '#eee'
    }, contentButtonText:
    {
        textAlign: 'center'
    },

    footer:
    {

    }
});

export { BMIScreen }