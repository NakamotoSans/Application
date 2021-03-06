import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    TextInput,
    StatusBar,
    ScrollView,
} from 'react-native'
// import mainConfig from '../api/mainConfig';
import axios from 'axios'
import { CommonActions } from '@react-navigation/native'
import {
    COLORS,
    FONTS,
    images,
    icons,
    SIZES,
    GOOGLE_API_KEY,
} from '../constants'

const OnBoarding = ({ navigation, route }) => {
    React.useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/1`)
            .then((res) => console.log(res))
    }, [])
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='#201F1B' />
            <Text style={styles.heading}>On Boarding</Text>
            <View
                style={{
                    height: 55,
                    width: '88%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FECA5D',
                    borderRadius: 7,
                    // alignSelf: 'flex-start',
                    marginBottom: 40,
                }}
            >
                <TouchableNativeFeedback onPress={() => {}}>
                    <View style={styles.button}>
                        <Image
                            source={require('../assets/icons/license.png')}
                            style={{
                                height: 35,
                                width: 35,
                                resizeMode: 'contain',
                            }}
                        />
                        <TextInput
                            style={styles.buttonText}
                            placeholder='License No.'
                            // value={input.ingredient}
                            // onChangeText={text => ingredientInput(text, key)}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View
                style={{
                    height: 55,
                    width: '88%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FECA5D',
                    borderRadius: 7,
                    // alignSelf: 'flex-start',
                    marginBottom: 40,
                }}
            >
                <TouchableNativeFeedback onPress={() => {}}>
                    <View style={styles.button}>
                        <Image
                            source={icons.car}
                            style={{
                                height: 35,
                                width: 35,
                                resizeMode: 'contain',
                            }}
                        />
                        <TextInput
                            style={styles.buttonText}
                            placeholder='Vehicle Model'
                            // value={input.ingredient}
                            // onChangeText={text => ingredientInput(text, key)}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View
                style={{
                    height: 55,
                    width: '88%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FECA5D',
                    borderRadius: 7,
                    // alignSelf: 'flex-start',
                    marginBottom: 40,
                }}
            >
                <TouchableNativeFeedback onPress={() => {}}>
                    <View style={styles.button}>
                        <Image
                            source={require('../assets/icons/seat.png')}
                            style={{
                                height: 35,
                                width: 35,
                                resizeMode: 'contain',
                            }}
                        />
                        <TextInput
                            style={styles.buttonText}
                            placeholder='No. of Seats'
                            // value={input.ingredient}
                            // onChangeText={text => ingredientInput(text, key)}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View
                style={{
                    height: 55,
                    width: '88%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FECA5D',
                    borderRadius: 7,
                    // alignSelf: 'flex-start',
                    marginBottom: 40,
                }}
            >
                <TouchableNativeFeedback onPress={() => {}}>
                    <View style={styles.button}>
                        <Image
                            source={require('../assets/icons/star.png')}
                            style={{
                                height: 35,
                                width: 35,
                                resizeMode: 'contain',
                            }}
                        />
                        <TextInput
                            style={styles.buttonText}
                            placeholder='Experience'
                            keyboardType='numeric'
                            // value={input.ingredient}
                            // onChangeText={text => ingredientInput(text, key)}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View
                style={{
                    height: 55,
                    width: '88%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FECA5D',
                    borderRadius: 7,
                    // alignSelf: 'flex-start',
                    marginBottom: 40,
                }}
            >
                <TouchableNativeFeedback onPress={() => {}}>
                    <View style={styles.button}>
                        <Image
                            source={require('../assets/icons/license-plate.png')}
                            style={{
                                height: 35,
                                width: 35,
                                resizeMode: 'contain',
                            }}
                        />
                        <TextInput
                            style={styles.buttonText}
                            placeholder='Number Plate'
                            // value={input.ingredient}
                            // onChangeText={text => ingredientInput(text, key)}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View
                style={{
                    height: 65,
                    position: 'relative',
                    top: 40,
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: '#FECA5D',
                    borderRadius: 7,
                    marginRight: 20,
                }}
            >
                <TouchableNativeFeedback
                    onPress={() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [
                                    {
                                        name: 'Wallet',
                                        driver: true,
                                    },
                                ],
                            })
                        )
                    }}
                >
                    <View
                        style={
                            {
                                // justifyContent: 'space-between',
                                // flexDirection: 'row',
                            }
                        }
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                {
                                    marginLeft: 3,
                                    // marginRight: 0,
                                    paddingHorizontal: 15,
                                },
                            ]}
                        >
                            Continue
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </ScrollView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#201F1B', //1C1C19
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    heading: {
        fontFamily: 'MPLUSRounded1c-Bold',
        marginTop: 55,
        marginBottom: 55,
        // alignSelf: 'flex-start',
        zIndex: 1,
        fontSize: 38,
        color: '#FECA5D',
        letterSpacing: 4,
        textTransform: 'uppercase',
    },
    button: {
        height: 65,
        width: '100%',
        paddingHorizontal: 15,
        // justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FECA5D',
        borderRadius: 7,
    },
    buttonText: {
        fontFamily: 'MPLUSRounded1c-Medium',
        color: '#372D35',
        fontSize: 25,
        marginLeft: 15,
        width: '100%',
        paddingHorizontal: 5,
    },
})
