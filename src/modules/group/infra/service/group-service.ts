import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

import { GroupResponse } from "@/modules/group/infra/types";

export const createGroupService = async () => {
  const db = getFirestore();
  const data: GroupResponse = {
    name: "Group 1",
    description: "Description 1",
    members: [],
    musicKitsFolders: [],
    createdAt: new Date(),
  };

  const newGroupRef = doc(collection(db, "groups")); // Cria uma referência com ID único
  const group = await setDoc(newGroupRef, { ...data, id: newGroupRef.id });
  console.log({ newGroupRef, group });
};
