import {View, Text, Pressable, PressableProps} from 'react-native'
import React, {forwardRef, Ref} from 'react'

interface Props extends PressableProps {
    children?: React.ReactNode
    color?: 'primary' | 'secondary' | 'tertiary'
    variant?: 'contained' | 'text-only'
    className?: string
}

const CustomButton = forwardRef(({
                                     children,
                                     color,
                                     onPress,
                                     onLongPress,
                                     variant = 'contained',
                                     className
                                 }: Props, ref: Ref<View>) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color || 'primary']

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'
    }

    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text className={`${textColor} font-work-medium text-center`}>{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
            ref={ref}
        >
            <Text className={'text-white font-work-medium- text-center'}>{children}</Text>
        </Pressable>
    )
})
export default CustomButton
