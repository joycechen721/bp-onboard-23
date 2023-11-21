import {
  Button, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Post from '../Components/Post';

export default function Feed({ navigation }) {
  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ];

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const [text, setText] = useState('');

  const handleSubmit = () => {
    alert('HIII');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <View style={{ padding: 10 }}>
        <Text>Create a Post: </Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Write your post here"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      {GIVEN_POSTS.map((obj) => (
        <Post key={obj._id} username={obj.username} body={obj.body} />
      ))}
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
