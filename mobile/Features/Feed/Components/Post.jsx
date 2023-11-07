import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({ username, body }) {
  return (
    <>
      <Text>{username}</Text>
      <Text>{body}</Text>
    </>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
