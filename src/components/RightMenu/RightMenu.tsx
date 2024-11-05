import { User } from "@prisma/client";
import { Suspense } from "react";
import Ads from "../Ads";
import Birthday from "./Birthday";
import FriendRequests from "./FriendReq";
import UserInfo from "./UserInfo";
import UserMedia from "./UserMedia";

const RightMenu = (
  { user }: { user?: User }
  ) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfo user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMedia user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthday />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;