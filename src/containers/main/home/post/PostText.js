import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, Vibration} from 'react-native';
import colors from 'res/colors';

export default function PostText({post}) {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore,setLengthMore] = useState(false);
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }
  const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=2); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  },[])
  return (
    <View
      style={{
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column',
        marginTop: -15,
      }}>
      
      <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 13}}>
        {post.userName}
      </Text>
      {/* <Text style={{color: colors.text}}>
        {post.text}
      </Text> */}
       <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 1}
              style={{ color: colors.text }}>{post.commentString}</Text>

              {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ color: colors.textFaded2 }}>{textShown ? '...less' : '...more'}</Text>
                  :null
              }
    </View>
  );
}
