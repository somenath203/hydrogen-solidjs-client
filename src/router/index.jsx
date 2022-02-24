import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const AuthLayout = lazy(() => import("../screens/auth"));
const Login = lazy(() => import("../screens/auth/Login"));
const Signup = lazy(() => import("../screens/auth/Signup"));

const MainLayout = lazy(() => import("../screens/MainLayout"));
const Home = lazy(() => import("../screens/Home"));

// friends
const FriendsLayout = lazy(() => import("../screens/friends"));
const FriendsMyFriends = lazy(() => import("../screens/friends/MyFriends"));
const FriendsRequestsReceived = lazy(() =>
  import("../screens/friends/RequestsReceived")
);
const FriendsRequestsSent = lazy(() =>
  import("../screens/friends/RequestsSent")
);
const FriendsSuggestions = lazy(() => import("../screens/friends/Suggestions"));

// posts
const PostsLayout = lazy(() => import("../screens/posts"));
const PostsHome = lazy(() => import("../screens/posts/Home"));
const TrendingPosts = lazy(() => import("../screens/posts/Trending"));
const FriendsPosts = lazy(() => import("../screens/posts/FriendsPosts"));
const CreatePost = lazy(() => import("../screens/posts/Create"));

// groups
const GroupsLayout = lazy(() => import("../screens/groups"));
const MyGroups = lazy(() => import("../screens/groups/MyGroups"));
const GroupsFeed = lazy(() => import("../screens/groups/Feed"));
const GroupsSuggestions = lazy(() => import("../screens/groups/Suggestions"));
const GroupsInvited = lazy(() => import("../screens/groups/Invited"));
const GroupsJoined = lazy(() => import("../screens/groups/Joined"));
const CreateGroup = lazy(() => import("../screens/groups/Create"));
const GroupNotifications = lazy(() =>
  import("../screens/groups/Notifications")
);
const CreateGroupPost = lazy(() => import("../screens/groups/CreatePost"));

// group details
const GroupDetailsLayout = lazy(() => import("../screens/groups/groupDetails"));
const GroupAbout = lazy(() => import("../screens/groups/groupDetails/About"));
const GroupMembers = lazy(() =>
  import("../screens/groups/groupDetails/Members")
);
const GroupPosts = lazy(() => import("../screens/groups/groupDetails/Posts"));

// profile
const ProfileLayout = lazy(() => import("../screens/profile"));
const ProfilePosts = lazy(() => import("../screens/profile/Posts"));
const ProfileAboutLayout = lazy(() => import("../screens/profile/about"));
const ProfileAboutOverview = lazy(() =>
  import("../screens/profile/about/Overview")
);
const ProfileAboutEducation = lazy(() =>
  import("../screens/profile/about/Education")
);
const ProfileAboutContact = lazy(() =>
  import("../screens/profile/about/Contact")
);
const ProfileAboutLifeEvent = lazy(() =>
  import("../screens/profile/about/LifeEvent")
);
const ProfileAboutPlace = lazy(() => import("../screens/profile/about/Place"));

const ProfileFriendsLayout = lazy(() => import("../screens/profile/friends"));
const ProfileFriendsAll = lazy(() =>
  import("../screens/profile/friends/AllFriends")
);
const ProfileFriendsBirthdays = lazy(() =>
  import("../screens/profile/friends/Birthdays")
);
const ProfileFriendsCurrentCity = lazy(() =>
  import("../screens/profile/friends/CurrentCity")
);
const ProfileFriendsRecentlyAdded = lazy(() =>
  import("../screens/profile/friends/RecentlyAdded")
);

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />

        {/* friends  */}
        <Route path="friends" element={<FriendsLayout />}>
          <Route path="" element={<FriendsMyFriends />} />
          <Route path="suggestions" element={<FriendsSuggestions />} />
          <Route
            path="requests-received"
            element={<FriendsRequestsReceived />}
          />
          <Route path="requests-sent" element={<FriendsRequestsSent />} />
        </Route>

        {/* posts  */}

        <Route path="posts" element={<PostsLayout />}>
          <Route path="" element={<PostsHome />} />
          <Route path="trending" element={<TrendingPosts />} />
          <Route path="friends_posts" element={<FriendsPosts />} />
          <Route path="create" element={<CreatePost />} />
        </Route>

        {/* group  */}
        <Route path="groups" element={<GroupsLayout />}>
          <Route path="" element={<GroupsFeed />} />
          <Route path="my" element={<MyGroups />} />
          <Route path="invites" element={<GroupsInvited />} />
          <Route path="joined" element={<GroupsJoined />} />
          <Route path="suggestions" element={<GroupsSuggestions />} />
          <Route path="notifications" element={<GroupNotifications />} />
          <Route path="post_create" element={<CreateGroupPost />} />
          <Route path="create" element={<CreateGroup />} />
        </Route>

        {/* group details */}
        <Route path="groups/:groupId" element={<GroupDetailsLayout />}>
          <Route path="" element={<GroupAbout />} />
          <Route path="posts" element={<GroupPosts />} />
          <Route path="members" element={<GroupMembers />} />
        </Route>
        {/* profile  */}
        <Route path="/:userId" element={<ProfileLayout />}>
          <Route path="" element={<ProfilePosts />} />
          <Route path="about" element={<ProfileAboutLayout />}>
            <Route path="" element={<ProfileAboutOverview />} />
            <Route path="education" element={<ProfileAboutEducation />} />
            <Route path="place" element={<ProfileAboutPlace />} />
            <Route path="contact" element={<ProfileAboutContact />} />
            <Route path="life_events" element={<ProfileAboutLifeEvent />} />
          </Route>
          <Route path="friends" element={<ProfileFriendsLayout />}>
            <Route path="" element={<ProfileFriendsAll />} />
            <Route
              path="recently_added"
              element={<ProfileFriendsRecentlyAdded />}
            />
            <Route path="birthdays" element={<ProfileFriendsBirthdays />} />
            <Route
              path="current_city"
              element={<ProfileFriendsCurrentCity />}
            />
          </Route>
        </Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}