import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
container: {
  flex: 1,
  padding: 30,
  justifyContent: 'space-between',

},
subContainer: {
  flex: 0.76,
  flexDirection: 'column',
  justifyContent: 'space-between',
},
text: {
  fontSize: 12,
  alignSelf: 'center',
  textAlign: 'center',
},

  textInput: {
    backgroundColor:'rgba(255,182,193,0.5)'

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  header : {
  fontSize: 30,
  fontWeight: 'bold',
  color: Colors.primary,
},
logo: {
  flex: 0.05,
  width: 130,
  alignSelf: 'center',
},
button: {
  marginTop: 10,
  justifyContent: "center",
  backgroundColor: "#cccccc",
  padding: 10,
  borderRadius: 4,
  height: 57,
},
});
