import {configureStore} from '@reduxjs/toolkit';
import { allUsersReducer, getPostOfFollowingReducer, userProfileReducer, userReducer} from './Reducer/User'
import {  allQuerysReducer, likeReducer, myPostsReducer, userPostsReducer } from './Reducer/Post';

const store = configureStore({
     reducer:{
          user:userReducer,
          postOfFollowings:getPostOfFollowingReducer,
          allUsers:allUsersReducer,
          like:likeReducer,
          myPost:myPostsReducer,
          userProfile: userProfileReducer,
          userPosts: userPostsReducer,
          querys:allQuerysReducer
     }
});
export default store;

