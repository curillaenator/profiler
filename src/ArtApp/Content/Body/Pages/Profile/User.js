import { ProfileCont } from "./ProfileCont";
import { NotesCont } from "./Note/NotesCont";
import { PrimaryDivider } from "../../../../UIComponents/Dividers/Dividers";

function User() {
  return (
    <>
      <ProfileCont />
      <PrimaryDivider height="20px" />
      <NotesCont />
    </>
  );
}
export default User;
