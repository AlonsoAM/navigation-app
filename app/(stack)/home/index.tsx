import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className={'px-10 mt-5'}>

                <CustomButton className={'mb-2'}
                              onPress={() => router.push('/products')}> Productos </CustomButton>

                <CustomButton className={'mb-2'}
                              color={'secondary'}
                              onPress={() => router.push('/profile')}> Profile </CustomButton>

                <CustomButton className={'mb-2'}
                              color={'tertiary'}
                              onPress={() => router.push('/settings')}> Ajustes </CustomButton>

                <Link href={'/products'} asChild>
                    <CustomButton className={'mb-10'} variant={'text-only'}> Productos </CustomButton>
                </Link>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
