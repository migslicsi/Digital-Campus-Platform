import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const {_id} = useSelector((state)=> state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <motion.Box
    initial={{opacity: 0}}
    animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
    exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <Navbar />
      <Box
        mt="70px"
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          {userId===_id && <FriendListWidget userId={userId} />}
        </Box>
        <Box m="2rem 0" />
        <Box flexBasis={isNonMobileScreens ? "50%" : undefined}>
          {userId===_id && <Box mb={isNonMobileScreens ? "4rem" : "0rem"}><MyPostWidget picturePath={user.picturePath} /></Box>}
        <Box mt={isNonMobileScreens ? "-2rem" : "0rem"}
          >
          <PostsWidget userId={userId} isProfile />
          </Box>
        </Box>
      </Box>
    </motion.Box>
  );
};

export default ProfilePage;
