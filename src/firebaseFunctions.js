import "firebase/auth";
import "firebase/firestore";

export const getUserId = (user) => {
  if (user) {
    console.log(user.id);
    return user.id;
  } else {
    console.error("User no found");
  }
};
