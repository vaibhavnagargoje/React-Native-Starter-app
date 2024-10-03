import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardelevated]}> 
            <Text>
                Tap 
            </Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}> 
            <Text>
                me 
            </Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}> 
            <Text>
                to 
            </Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}> 
            <Text>
                more.. 
            </Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}> 
            <Text>
                😒💖💖
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },

    card:{
        width:100,
        height:100,
        borderRadius:5,
        margin:8,
        color:"#00000",
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    cardelevated: {

        backgroundColor:'#CAD5E2',
        elevation:5,
        shadowOffset:{
            width:10,
            height:10
            
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:5
    },
    container:{
        padding:8,


    }

})