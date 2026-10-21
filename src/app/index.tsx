import React, { useState } from "react";
import { View, Text, ScrollView, Button, ActivityIndicator, RefreshControl } from "react-native";

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
        <ScrollView refreshControl={
            <RefreshControl refreshing={isPullLoading} onRefresh={processPullLoading}/>
        }>
            <Button title="Send" onPress={processLoading}/>

            {
                isLoading &&
                <View>
                    <ActivityIndicator size={"large"} color={"#a10000"}/>
                </View>
            }
        </ScrollView>
    )
}