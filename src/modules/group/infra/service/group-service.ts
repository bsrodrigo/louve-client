import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  Timestamp,
  where,
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

// TODO OLD
// export const listGroupsService = async (): Promise<Group[]> => {
//   const db = getFirestore();
//   const groupsCollection = collection(db, "groups");
//   const groupsSnapshot = await getDocs(groupsCollection);

//   const groups: Group[] = [];
//   groupsSnapshot.forEach((doc) => {
//     const group = doc.data() as Group;
//     groups.push(group);
//   });

//   return groups;
// };

export const listGroupsService = async (userId: string): Promise<Group[]> => {
  const db = getFirestore();

  // Cria a query filtrando por grupos que contenham o userId no array "members"
  const groupsQuery = query(
    collection(db, "groups"),
    where("members", "array-contains", userId)
  );

  const groupsSnapshot = await getDocs(groupsQuery);

  // Mapeia o resultado para um array de Group
  const groups: Group[] = groupsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Group[];

  return groups;
};
