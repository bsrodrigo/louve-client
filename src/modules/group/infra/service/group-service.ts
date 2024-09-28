import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { Group } from "@/modules/group/models";

export const createGroupService = async (group: Group): Promise<Group> => {
  const db = getFirestore();

  const createdAt = Timestamp.now();
  const data = { ...group, createdAt };

  const newGroupRef = doc(collection(db, "groups"));
  await setDoc(newGroupRef, { ...data, id: newGroupRef.id });

  return {
    ...group,
    id: newGroupRef.id,
    createdAt: createdAt.toDate(),
  } as Group;
};

export const getGroupsService = async (): Promise<Group[]> => {
  const db = getFirestore();
  const groupsCollection = collection(db, "groups");
  const groupsSnapshot = await getDocs(groupsCollection);

  const groups: Group[] = [];
  groupsSnapshot.forEach((doc) => {
    const group = doc.data() as Group;
    groups.push(group);
  });

  return groups;
};
