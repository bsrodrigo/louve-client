import { Button } from "@mui/material";
import { createGroupService } from "@/modules/group/infra/service";

const GroupsPage = (): JSX.Element => {
  const handleAdd = () => {
    // createGroupService();
    // getUserService();
  };

  return (
    <div>
      <h1>Groups Page</h1>
      <p>Welcome to the Groups Page!</p>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

GroupsPage.displayName = "GroupsPage";
export default GroupsPage;
