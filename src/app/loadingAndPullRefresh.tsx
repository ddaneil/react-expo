import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, ActivityIndicator, RefreshControl } from "react-native";
import { halloweenStyles } from '@/constants/globalStyles';

export default function app() {
    const [isLoading, setIsLoading] = useState(false);
    const [isPullLoading, setIsPullLoading] = useState(false);

    const processLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }
    
    const processPullLoading = () => {
        setIsPullLoading(true);
        setTimeout(() => {
            setIsPullLoading(false);
        }, 6000);
    }

    return (
        <ScrollView style={halloweenStyles.scrollContainer} refreshControl={
            <RefreshControl refreshing={isPullLoading} onRefresh={processPullLoading}/>
        }>
            <Pressable style={halloweenStyles.ghastlyButton} onPress={processLoading}>
                <Text style={halloweenStyles.ghastlyButtonText}>DO RELOAD</Text>
            </Pressable>


            {
                isLoading &&
                <View>
                    <ActivityIndicator size={"large"} color={"#a10000"}/>
                </View>
            }
        </ScrollView>
    )
}