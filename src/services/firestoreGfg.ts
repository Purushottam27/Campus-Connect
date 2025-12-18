import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Club, Event } from "@/data/mockData";

const GFG_CLUB_ID = "gfg";

/* ================= CLUB ================= */

export const getGfgClub = async (): Promise<Club | null> => {
  try {
    const snap = await getDoc(doc(db, "clubs", GFG_CLUB_ID));
    return snap.exists() ? (snap.data() as Club) : null;
  } catch {
    return null;
  }
};

/* ================= EVENTS ================= */

export const getGfgEvents = async (): Promise<Event[]> => {
  try {
    const q = query(
      collection(db, "events"),
      where("clubId", "==", GFG_CLUB_ID)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Event) }));
  } catch {
    return [];
  }
};

export const createGfgEvent = async (event: Event) =>
  addDoc(collection(db, "events"), { ...event, clubId: GFG_CLUB_ID });

export const updateGfgEvent = async (id: string, data: Partial<Event>) =>
  updateDoc(doc(db, "events", id), data);

export const deleteGfgEvent = async (id: string) =>
  deleteDoc(doc(db, "events", id));

/* ================= USERS (AUTH SIMULATION) ================= */

export interface FirestoreUser {
  id: string;
  email: string;
  password: string;
  role: "student" | "club_head";
  clubId?: string;
}

export const registerUser = async (
  email: string,
  password: string,
  role: "student" | "club_head"
) => {
  await addDoc(collection(db, "users"), {
    email,
    password,
    role,
    clubId: role === "club_head" ? GFG_CLUB_ID : null,
  });
};

export const loginUser = async (
  email: string,
  password: string
): Promise<FirestoreUser | null> => {
  const q = query(
    collection(db, "users"),
    where("email", "==", email),
    where("password", "==", password)
  );

  const snap = await getDocs(q);
  if (snap.empty) return null;

  const docSnap = snap.docs[0];
  return { id: docSnap.id, ...(docSnap.data() as FirestoreUser) };
};
