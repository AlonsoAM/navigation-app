import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'

const App = () => {
    return (
        <SafeAreaView>
            <View className="mt-6 mx-2.5">
                <Text className="text-3xl font-work-black text-primary">Hola mundo!</Text>
                <Text className="text-2xl font-work-medium text-secondary">Hola mundo!</Text>
                <Text className="text-xl font-work-light text-tertiary">Hola mundo!</Text>
            </View>
        </SafeAreaView>

    )
}
export default App
