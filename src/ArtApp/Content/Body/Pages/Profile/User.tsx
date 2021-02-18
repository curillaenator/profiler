import { ProfileCont } from "./ProfileCont";
import { NotesCont } from "./Note/NotesCont";

function User() {
  return (
    <div style={{ marginBottom: "24px" }}>
      <ProfileCont />
      <NotesCont />
    </div>
  );
}
export default User;
