import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from "@/environment/environment";

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

export { db, app };
