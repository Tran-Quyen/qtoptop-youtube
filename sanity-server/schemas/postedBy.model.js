const PostedBySchema = {
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',
  to: [
    {
      type: 'user',
    },
  ],
};

export default PostedBySchema;
