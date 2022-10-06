const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog_post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_post: 'Integer quis auctor elit sed. Pellentesque adipiscing commodo elit at imperdiet. Arcu vitae elementum curabitur vitae. Facilisis volutpat est velit egestas dui id. Sed faucibus turpis in eu mi bibendum neque. Leo vel orci porta non pulvinar neque laoreet suspendisse. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Lacus viverra vitae congue eu consequat ac felis donec et. Senectus et netus et malesuada fames ac turpis egestas maecenas. Ut tellus elementum sagittis vitae. Ut faucibus pulvinar elementum integer enim neque. Non nisi est sit amet facilisis magna. Ornare lectus sit amet est placerat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eu augue ut lectus arcu bibendum. Ipsum a arcu cursus vitae.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog_post: 'Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Rhoncus est pellentesque elit ullamcorper dignissim. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Accumsan in nisl nisi scelerisque eu ultrices vitae. Mauris augue neque gravida in fermentum et sollicitudin ac. Nunc vel risus commodo viverra. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Faucibus purus in massa tempor nec feugiat. Quisque id diam vel quam elementum pulvinar. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Risus quis varius quam quisque id diam. A erat nam at lectus urna duis convallis convallis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Id donec ultrices tincidunt arcu non sodales. Vitae ultricies leo integer malesuada. Nulla posuere sollicitudin aliquam ultrices. Enim neque volutpat ac tincidunt vitae semper quis. Nunc sed id semper risus in hendrerit. Enim neque volutpat ac tincidunt vitae semper quis lectus. Mauris augue neque gravida in fermentum et sollicitudin.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    blog_post: 'Nunc sed augue lacus viverra vitae congue eu. Non enim praesent elementum facilisis leo vel fringilla. Morbi tristique senectus et netus et malesuada fames ac turpis. Sed augue lacus viverra vitae congue. Ornare arcu dui vivamus arcu felis bibendum. Nulla at volutpat diam ut venenatis. Placerat in egestas erat imperdiet. Adipiscing commodo elit at imperdiet dui accumsan sit. Maecenas pharetra convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing. Etiam dignissim diam quis enim. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.',
    user_id: 4
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
