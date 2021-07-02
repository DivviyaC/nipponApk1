import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    view: {
        backgroundColor: "white", height: '100%'
    },
    cardStyle: {
        margin: 15, padding: 25,
        backgroundColor:'#0a428f'
    },
    cardView: {
        flexDirection: 'row',
        marginTop:20,
        marginBottom:10
    },
    reviewStyle: {
        paddingRight: 20,
    },
    reviewText: {
        fontSize: 15, 
        paddingTop: 5,
        fontFamily: 'Montserrat-Bold',
               fontWeight:'700',
               color:'white'
        
        
    },
    ratingView: {
        alignItems: 'center', padding: 15
    },
    ratingReview: {
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingBottom:0,
        marginBottom: 20,
        color: 'white',
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',

    },
    submit: {
        width: '35%', marginLeft: '32%', marginTop: 10
    },
    signatureClose:{ color: 'white', textAlign: 'right' },
    signatureView:{ flex: 1 },
    signatureComment:{
        textAlign:'center',
        paddingLeft: 10,
        paddingBottom: 10,
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',
        backgroundColor:'#0a428f',
        color:'white',
        fontSize: 15,
      },
      canvasContainerStyle:{ 
          backgroundColor: 'white', 
          flex: 1, maxHeight: '70%', padding: 0 },
      canvasStyle:{ backgroundColor: 'white', flex: 1, },
      clearComponent:{  marginLeft: 40, marginTop:20},
      clearText:{
        fontSize: 19,
        padding:20,
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',
        
        backgroundColor: "#d60c33",
        borderRadius:15,
        marginLeft:10,
        marginBottom:10,
        alignContent:'flex-end',
        color:'white'
      }, 
      saveSignature:{ marginTop:20,marginLeft: 50, },

      saveText:{
        fontSize: 19,
        padding:20,
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',
        borderRadius:15,
        backgroundColor: "#4BB543",
        marginRight:20,
        marginBottom:10,
        color:'white'
      },

});