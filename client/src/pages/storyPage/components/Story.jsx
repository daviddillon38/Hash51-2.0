import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box
} from "@chakra-ui/react";

import CommentList from './CommentList';


const Story = (props) => {
  const { conspiracy } = props;
  const { userName, storyTitle, comments } = conspiracy;
  return (
  <div>
    <Box bg="purple.400" mb=".5vh" w="60vw" borderTopRadius={10}>
      <Text ml="10px" fontSize="10px">{storyTitle}</Text>
      <Box bg="purple.100" w="60vw" h="30vh" />
      <Text ml="10px" fontSize="10px">Created at by {userName}</Text>
    </Box>
    <CommentList comments={comments}/>
  </div>
  );
};

Story.propTypes = {
  conspiracy: PropTypes.isRequired,
};

export default Story;
