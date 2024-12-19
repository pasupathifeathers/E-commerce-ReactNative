import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodayDeals = ({route}) => {
    const {id}=route.params
  return (
    <View>
      <Text>TodayDeals{id}</Text>
    </View>
  )
}

export default TodayDeals

const styles = StyleSheet.create({})