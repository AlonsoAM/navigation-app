import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className={'px-10 mt-5'}>
                <Link href={'/products'} asChild>
                    <CustomButton className={'mb-10'}> Productos </CustomButton>
                </Link>
                <CustomButton className={'mb-10'}
                              onPress={() => router.push('/products')}> Productos </CustomButton>
                <CustomButton className={'mb-10'} variant={'text-only'}
                              onPress={() => router.push('/products')}> Productos </CustomButton>


                {/*<Link className={'mb-5'} href={'/products'}>Productos</Link>*/}
                {/*<Link className={'mb-5'} href={'/profile'}>Perfil</Link>*/}
                {/*<Link className={'mb-5'} href={'/settings'}>Configuración</Link>*/}
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
