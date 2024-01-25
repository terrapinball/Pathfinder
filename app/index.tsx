import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '@/constants';
import { Nearbyjobs, PopularJobs, ScreenHeaderBtn, Welcome } from '@/components';

const Home = () => {

  const handleMenuPress = () => {

  };

  const handleProfilePress = () => {

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' handlePress={handleMenuPress} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' handlePress={handleProfilePress} />
          ),
          headerTitle: ''
        }}
      />

      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome

          />
          <PopularJobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;